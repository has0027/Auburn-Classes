# Normalize the tf_idf vectors

tf_idf_vectors = []

with open("tf_idf_vectors.txt", "r") as file:
    tf_idf_vectors = eval(file.read())

for doc in tf_idf_vectors:
    l = len(doc[1])
    for k, v in doc[1].items():
        doc[1][k] = v/l


with open("tf_idf_normalized.txt", "w") as file:
    file.write(str(tf_idf_vectors))
