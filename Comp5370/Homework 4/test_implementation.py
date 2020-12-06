################################################################################
# DO NOT EDIT THIS FILE
# 
# If you want to add your own tests, copy-paste into a new file and add there.
################################################################################
import pytest

from serialization import marshal
from deserialization import unmarshal
from exceptions import SerializationError, DeserializationError

@pytest.mark.parametrize("py_version,nosj_version", [
        ({}, "{}"),
        ({"a": 1}, "{a:i1}"),
        ({"a": -123}, "{a:i-123}"),
        ({"a": "abcd"}, "{a:abcds}"),
        ({"a": "abcds"}, "{a:abcdss}"),
        ({"a": "ab cd"}, "{a:ab cds}"),
        ({"a": "ab<cd>ef"}, "{a:ab<cd>efs}"),
        ({"a": "ab,cd"}, "{a:ab%2Ccd}"),
        ({"a": "ab\x00ef"}, "{a:ab%00ef}"),
        ({"a": 1, "b": "c"}, "{a:i1,b:cs}"),
        ({"a":{"b":{"c":1}}}, "{a:{b:{c:i1}}}"),
])
def test_implementation_ok(py_version, nosj_version):
    got = marshal(py_version)
    assert(got == nosj_version)

    got = unmarshal(nosj_version)
    assert(got == py_version)
