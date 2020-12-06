load "TinyToken.rb"
load "TinyScanner.rb"
# if the file(s) are in the same directory, you can simply precede
# the file name(s) with ./

# filename.txt below is simply the "source code"
# that you write that adheres to your grammar rules
# if it is in the same directory as this file, you can
# simply include the file name, otherwise, you will need
# to specify the entire path to the file as we did above
# to load the other ruby modules
scan = Scanner.new("LexTest.txt")
tok = scan.nextToken()

# the code below will open a file so that I 
# can save tokens to it
tokenFile = File.open("tokens", "w")
# keep "fetching" one token at a time, using your scanner
# until there are no tokens left to scan 
while (tok.get_type() != Token::EOF)
   
   # The instruction below writes your token into a file.
   tokenFile.print"Next token is: "
   print"Next token is: "
   tokenFile.print"#{tok.get_type()}"
   print"#{tok.get_type()}"
   
   tokenFile.print"   "
   print"   "
   
   tokenFile.print"Next lexeme is: "
   print"Next lexeme is: "
   tokenFile.puts"#{tok.get_text()}"
   puts"#{tok.get_text()}"
   
   # get the next token available (if there is one)
   tok = scan.nextToken()
end 

# There should be one token left (see the boolean condition above)
# putting the last token in the file and closing the file
tokenFile.print"Next token is: "
print"Next token is: "
tokenFile.print"#{tok.get_type()}"
print"#{tok.get_type()}"

tokenFile.print"   "
print"   "

tokenFile.print"Next lexeme is: "
print"Next lexeme is: "
tokenFile.puts"#{tok.get_text()} \n\n"
puts"#{tok.get_text()} \n\n"

tokenFile.close