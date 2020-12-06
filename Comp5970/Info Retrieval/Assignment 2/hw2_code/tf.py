import csv
import re

csv.field_size_limit(10000000)

tokens_not_included = []

def tokenize(text):
    text = text.lower().replace(".", "").replace("\n", " ").replace("--", " ").replace("  ", " ").replace(",", "").replace(":", "").replace(";", "").replace('"',
                            "").replace("?", "").replace("!", "").replace("/", "").replace("(", "").replace(")", "").replace("[", "").replace("]", "").replace("`", "").replace("\t", "").split(" ")
    
    tokens_not_included.append([t for t in text if not re.match(r"[a-z'\-0-9$%&]*\Z", t)])
    text = [t for t in text if re.match(r"[a-z'\-0-9$%&]*\Z", t)]
    token_dict = {}
    for word in text:
        if word in token_dict:
            token_dict[word] += 1
        else:
            token_dict[word] = 1
    return token_dict


doc_tokens = []
with open("state-of-the-union.csv", "r") as file:
    corpus = csv.reader(file, delimiter=",")
    # (doc_name, token_dict, document_length)
    for row in corpus:
        doc_tokens.append((row[0], tokenize(row[1])))
        
print(tokens_not_included)
with open("tf_vectors.txt", "w") as file:
    file.write(str(doc_tokens))
