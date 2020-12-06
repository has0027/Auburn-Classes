from exceptions import DeserializationError

def __unmarshal_string(marshalled_string):
	ret = ""
	
	if ascii_letter_check(marshalled_string):
		string_values = ["%2C", "%2E", "%21", "%3F", "%40", "%24", "%00"]

		# replace certain ascii values if present
		if any(x in marshalled_string for x in string_values):
			ret += marshalled_string.replace("%2C", ",")
			ret = ret.replace("%2E", ".")
			ret = ret.replace("%21", "!")
			ret = ret.replace("%3F", "?")
			ret = ret.replace("%40", "@")
			ret = ret.replace("%24", "$")
			ret = ret.replace("%00", "\x00")

		else:
			ret += marshalled_string

	return ret

def __unmarshal_integer(marshalled_integer):
	ret = int(marshalled_integer)
    

	return ret

def __unmarshal_map(marshalled_map):
	ret = {}

	# if input is empty
	if len(marshalled_map) <= 2:
		return ret

	# if the input contains more than one dict
	elif marshalled_map.count(":") > 1 and marshalled_map.count("}") > 1:
		key = marshalled_map[1]
		ret[key] = __unmarshal_map(marshalled_map[3:-1])

	# if the input contains more than one key
	elif marshalled_map.count(":") > 1 and marshalled_map.count("}") == 1:
		marshalled_map = marshalled_map[1:-1]		
		stringList = marshalled_map.split(",")
		
		for pair in stringList:
			tmp = "{" + pair + "}"
			newDictEntry = __unmarshal_map(tmp)
			ret.update(newDictEntry)

	# if input contains integer value
	elif marshalled_map[3] == "i":
		key = marshalled_map[1]
		ret[key] = __unmarshal_integer(marshalled_map[4:-1])

	# if input contains string value
	elif marshalled_map[-2] == "s":
		key = marshalled_map[1]
		ret[key] = __unmarshal_string(marshalled_map[3:-2])
		
	# if the input contains a string without the s value
	else:	
		key = marshalled_map[1]
		ret[key] = __unmarshal_string(marshalled_map[3:-1])

	return ret

# checks if the string is in ascii format
def ascii_letter_check(string):
	string.lower()
	return all(ord(x) < 122 for x in string)

def unmarshal(marshalled_state):
	if marshalled_state is None:
		raise DeserializationError("Input is None")
	if type(marshalled_state) != str:
		raise SerializationError("Input is not a string")

	return __unmarshal_map(marshalled_state)
