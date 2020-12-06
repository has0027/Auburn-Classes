class SerializationError(Exception):
    def __init__(self, msg):
        self.message = msg

class DeserializationError(Exception):
    def __init__(self, msg):
        self.message = msg

