#!/usr/bin/python
# -*- coding: iso-8859-1 -*-
blob = """
      b�MS2<����x��
`_���"��1:r�01/9��K)_k�M�X�Ў_���9\�}�AFrh���~>�ҏ"m���">m�x���Zn���f�����LLWF�R*�C>_Yf�c�"��&|"""
from hashlib import sha256
blobSHA = sha256(blob.encode('utf-8')).hexdigest()
if blobSHA == '5a900840379fe59e28ab527c4367931b84d97bdc0ac8e8072af77f5bc7185016':
	print("Hashing is not encryption!")
else:
	print("Security through obscurity is snake-oil!")
print(blobSHA)
