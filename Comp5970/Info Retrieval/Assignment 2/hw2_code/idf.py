import math

doc_tokens = []
with open("tf_vectors.txt", "r") as file:
    doc_tokens = eval(file.read())
idf_dict = {}
for doc in doc_tokens:
    for k, v in doc[1].items():
        if k in idf_dict:
            idf_dict[k] += v
        else:
            idf_dict[k] = v
total_docs = len(doc_tokens)
for k, v in idf_dict.items():
    idf_dict[k] = math.log(total_docs/v)

with open("idf_dict.txt", "w") as file:
    file.write(str(idf_dict))
