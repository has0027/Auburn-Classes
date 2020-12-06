# Assignment 1
# has0027
# This program will find all word combinations in a given
# txt file and output the top 10 combos that occur in the file
from itertools import combinations
from collections import Counter

def wordPairs(fileName):
	pairCounter = Counter()
	for line in open(fileName):
			
		words = sorted(set(line.replace("\n",
		'').split(" ")))
		
		pairs = list(combinations(words, 2))
		pairCounter += Counter(pairs)
	return pairCounter.items()
	
	
fileName = 'testdata.txt'
temp = wordPairs(fileName)

#with open("WordComboCounts.txt", "w") as file:
#	for x in temp:
#		file.write(str(x))

output = temp.most_common(10)
for x in output:								
	print(x)
