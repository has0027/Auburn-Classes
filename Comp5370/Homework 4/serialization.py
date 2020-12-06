from exceptions import SerializationError

def __marshal_string(py_string):
	ret = ""	

	# replace \x00 with %00
	if "\x00" in py_string:
		newStr = py_string.replace("\x00", "%00")
		return newStr
	
	# check for ascii values
	if ascii_letter_check(py_string):
		string_values = [",", ".", "!", "?", "@", "$", "\x00"]

		# replace certain ascii values if present
		if any(x in py_string for x in string_values):
			ret += py_string.replace(",", "%2C")
			ret = ret.replace(".", "%2E")
			ret = ret.replace("!", "%21")
			ret = ret.replace("?", "%3F")
			ret = ret.replace("@", "%40")
			ret = ret.replace("$", "%24")
			ret = ret.replace("\x00", "%00")

		else:
			ret += py_string + "s"

	return ret

def __marshal_integer(py_int):
	ret = "i"
	ret += str(py_int)

	return ret

def __marshal_map(py_dict):
	ret = "{"

	for key, value in py_dict.items():
		
		# add space between dicts
		if len(ret) > 1:
			ret += ","		

		# if value is int
		if isinstance(value, int):
			ret += str(key) + ":"
			ret += __marshal_integer(value)

		# if value is str
		elif isinstance(value, str):
			ret += str(key) + ":"
			ret += __marshal_string(value)
		
		# if value is another dict
		elif isinstance(value, dict):
			ret += str(key) + ":"
			ret += __marshal_map(value)

		# if value is not above
		else:
			ret += "Value is not String or Integer"

	ret += "}"
	return ret

# checks if the string is in ascii format
def ascii_letter_check(string):
	string.lower()
	return all(ord(x) < 122 for x in string)

def marshal(unmarshalled_state):
	if unmarshalled_state is None:
		raise SerializationError("Input is None")
	if type(unmarshalled_state) != dict:
		raise SerializationError("Input is not a dict")

	return __marshal_map(unmarshalled_state)
