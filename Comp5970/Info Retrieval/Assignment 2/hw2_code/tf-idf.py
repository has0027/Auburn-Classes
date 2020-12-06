tf_vectors = []
with open("tf_vectors.txt", "r") as file:
    tf_vectors = eval(file.read())

idf_dict = []
with open("idf_dict.txt", "r") as file:
    idf_dict = eval(file.read())


for row in tf_vectors:
    for k, v in row[1].items():
        row[1][k] = idf_dict[k] * v

with open("tf_idf_vectors.txt", "w") as file:
    file.write(str(tf_vectors))
