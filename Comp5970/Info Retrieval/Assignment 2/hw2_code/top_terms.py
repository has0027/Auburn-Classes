# Print top terms

doc = ()
with open("tf_idf_normalized.txt", "r") as file:
    vec = eval(file.read())[203]
    doc = list(vec[1].items())
    print(vec[0])

terms = sorted(doc, key=lambda x: x[1], reverse=True)
print(terms[:20])
