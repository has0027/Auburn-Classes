import os
import sys 
import pathlib
from hashlib import sha256 

FileTypes = {}
HaveFooter = {} 
Footers = {}
sizeOffsets = {} 
Output = {}
foundFile = {}

FileTypes["MPG"] = b"\x00\x00\x01\xB3\x14"
Footers["MPG"] = b"\x00\x00\x01\xB7"
FileTypes["PDF"] = b"\x25\x50\x44\x46"
Footers["PDF"] = b"\x25\x25\x45\x4F\x46"
FileTypes["DOCX"] = b"\x50\x4B\x03\x04\x14\x00\x06\x00"
Footers["DOCX"] = b"\x50\x4B\x05\x06" 
FileTypes["AVI"]= b"\x52\x49\x46\x46"
FileTypes["PNG"] = b"\x89\x50\x4E\x47\x0D\x0A\x1A\x0A" 
Footers["PNG"] = b"\x49\x45\x4E\x44\xAE\x42\x60\x82" 
FileTypes["JPG"] = b"\xFF\xD8\xFF\xE0"
Footers["JPG"]= b"\xFF\xD9" 
FileTypes["GIF"] = b"\x47\x49\x46\x38\x39\x61"
Footers["GIF"]= b"\x00\x00\x3B"
FileTypes["BMP"] = b"\x42\x4D\x76\x30\x01"

# Read file
if(len(sys.argv) != 2): 
    print("Missing disk file. Format python3 FileRecovery.py File.dd ")
    exit(1) 

diskFile = sys.argv[1] 

with open(diskFile, 'rb') as file: 
    diskData = file.read()

foundFileCount = 1

# file found format < # & type > < Start offset > < end offset> <sh256 hash> 
for f in FileTypes:

    offset = 0
    starting_location = 0
    substring = diskData

    while(offset != -1): 

        offset = substring.find(FileTypes[f])

        if(offset != -1):
            # In case we hit a false positive on BMP
            badSignature = False

            # Name we're calling the file 
            tmp_name =  "file" + str(foundFileCount) + "." + f.lower()
            tmp_name.replace(" ", "") 

            # Starting location 
            file_start = starting_location + offset 

            # Ending location
			# AVI size is bytes 4-7 
            if f == "AVI": 
                file_size = int.from_bytes(substring[offset + 4: offset + 8], byteorder='little', signed=False)
                file_end = file_start + file_size
            
			# BMP size is bytes 2-5
            elif (f == "BMP"):
                testBits = substring[offset + 6: offset + 10]

                # Valid BMP files have 4 reserved bytes
                if (testBits == b"\x00\x00\x00\x00"):
                    file_size = int.from_bytes(substring[offset + 2: offset + 6], byteorder='little', signed=False)
                    file_end = file_start + file_size
                else:
                    badSignature = True

            # GIF
            elif (f == "GIF"):
                footer_substring = substring[offset:]
                footer_offset = footer_substring.find(Footers[f])	
                file_end = file_start + footer_offset + len(Footers[f])
                file_size = file_end - file_start 

           	# PDF 
            elif (f == "PDF"): 
                # Find next PDF
                tmp_substring = substring[offset+len(FileTypes[f])+1:] 
                other_PDF_start = tmp_substring.find(FileTypes[f])
                
                if(other_PDF_start != -1):
                    possible_pdf_coverage = substring[offset+len(FileTypes[f]):other_PDF_start]

                else: 
                    possible_pdf_coverage = substring
                
                footer_offset = 0 
                file_size = 0 
                while footer_offset != -1:
                    footer_offset = possible_pdf_coverage.find(Footers[f])
                      
                    if(footer_offset != -1): 
                           file_size = footer_offset + file_size + len(Footers[f])
                           possible_pdf_coverage = possible_pdf_coverage[footer_offset+len(Footers[f]):] 

                file_end = file_start + file_size
			
			# If none of the above
            else:
                footer_substring = substring[offset:]
                footer_offset = footer_substring.find(Footers[f])

                if(footer_offset == -1): 
                    print ("This shouldn't happen, but it might mean a false positive") 
                    continue

                else:
                    file_end = file_start + footer_offset + len(Footers[f])
                    if f =="DOCX": 
                        #print("Hopefully we get here, but I don't think we are") 
                        file_end = file_end + 18

                file_size = file_end - file_start 

            # If file is found
            if (not badSignature):
                # sha256 hash
                fileData = diskData[file_start:file_end]
                file_sha256 = sha256(fileData).hexdigest()

                # create tuple 
                file_tuple = (tmp_name, file_start, file_end, file_size, file_sha256) 

                # add it to dictionary
                if(file_start != file_end):
                    foundFile[tmp_name] = file_tuple
                    foundFileCount = foundFileCount+1
            else:
                file_size = 10000

            # setup for next file 
            substring = substring[offset+file_size:]
            starting_location = starting_location + offset + file_size

# Create new directory for recovered files if not already created
os.system("mkdir -p RecoveredFiles")

# file recovery
for k in foundFile:  
	outputTxt = str(foundFile[k][0]) + "\t" + "{:08d}".format(foundFile[k][1]) + "\t" + "{:08d}".format(foundFile[k][2]) + "\t" + "{: >8d}".format(foundFile[k][3]) + "\t" + str(foundFile[k][4])
	#print("dd if=Project2Updated.dd of=", foundFile[k][0], " bs=1 skip=" , foundFile[k][1], " count=", foundFile[k][3])
	
	# put values in output dict
	Output[k] = outputTxt

	# recover files	and send to recovered files dir
	ff0 = foundFile[k][0]
	ff1 = foundFile[k][1]
	ff3 = foundFile[k][3]
	cmd = "dd if=Project2Updated.dd of=%s bs=1 skip=%s count=%s status=none"%(ff0, ff1, ff3)
	os.system(cmd)
	os.system("mv %s RecoveredFiles/"%ff0)

# print output
print("The disk image contains %i files\n"%len(Output))
print("FileName\tFileStart\tFileEnd\t\tFileSize\tSHA256")
for k in Output:
	print(Output[k])
	
print("\nFiles stored in %s/RecoveredFiles"%pathlib.Path().absolute())






