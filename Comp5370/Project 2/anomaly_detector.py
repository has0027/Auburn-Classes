import dpkt
import sys
import socket


# Function to convert inet object to string
def inet_to_str(inet):
	try:
		return socket.inet_ntop(socket.AF_INET, inet)
	except ValueError:
		return socket.inet_ntop(socket.AF_INET6, inet)


# Open file
filepath = sys.argv[1]
fileIn = open(filepath, 'rb')
pcap = dpkt.pcap.Reader(fileIn)

# Dictionary where ip address = key and dictionary of SYNs and SYN-ACKs = value 
ipAddresses = dict() 

# Loop through pcap
for num, (ts, buff) in enumerate(pcap):
	
	# Ignore malformed packets
	try:
		eth = dpkt.ethernet.Ethernet(buff)
	except (dpkt.dpkt.UnpackError, IndexError):
		continue		

	# Check if packet is using IP
	if eth.type != dpkt.ethernet.ETH_TYPE_IP:
		continue

	# Check if packet is using TCP
	ip = eth.data
	if ip.p != dpkt.ip.IP_PROTO_TCP:
		continue

	# Set IP variables
	sourceIP = socket.inet_ntoa(ip.src)
	destIP = socket.inet_ntoa(ip.dst)

	# Put likely addresses into dictionary
	tcp = ip.data
	if (tcp.flags & dpkt.tcp.TH_SYN) and (tcp.flags & dpkt.tcp.TH_ACK):
		if destIP not in ipAddresses:
			ipAddresses[destIP] = {'SYN': 0, 'SYN-ACK': 0}
		ipAddresses[destIP]['SYN-ACK'] += 1

	elif tcp.flags & dpkt.tcp.TH_SYN:
		if sourceIP not in ipAddresses:
			ipAddresses[sourceIP] = {'SYN': 0, 'SYN-ACK': 0}
		ipAddresses[sourceIP]['SYN'] += 1
	
# Test if SYN > 3x(SYN-ACK)
resultList = list()
for x in ipAddresses.keys():
	if ipAddresses[x]['SYN'] > ipAddresses[x]['SYN-ACK'] * 3:
		resultList.append(x)

# Print IP addresses left in dictionary
print(*resultList, sep="\n")
