tf_idf_normalized = []
with open("tf_idf_normalized.txt", "r") as file:
    tf_idf_normalized = eval(file.read())

tf_idf_normalized = tf_idf_normalized[111:]
tf_idf_normalized_by_decade = []

decade_dict = {}
decades = [1910, 1920, 1930, 1940,
           1950, 1970, 1980, 1990, 2000, 2010, 2020]

d_num = 0
for doc in tf_idf_normalized:
    if int(doc[0]) > decades[d_num] and len(decade_dict) > 0:
        tf_idf_normalized_by_decade.append((decades[d_num]-10, decade_dict))
        decade_dict = {}
        d_num += 1
    for k, v in doc[1].items():
        if k in decade_dict:
            decade_dict[k] += v
        else:
            decade_dict[k] = v
            
tf_idf_normalized_by_decade.append(('remaining', decade_dict))
tf_idf_normalized_by_decade_sorted = []
for decade in tf_idf_normalized_by_decade:
    tf_idf_normalized_by_decade_sorted.append((decade[0], 
    sorted(list(decade[1].items()),key=lambda x: x[1], reverse=True)[:20]))
    
for x in tf_idf_normalized_by_decade_sorted:
    print(str(x[0]) + ": " + str(x[1]) + "\n\n")
    
with open("tf_idf_normalized_by_decade_sorted.txt", "w") as file:
    file.write(str(tf_idf_normalized_by_decade_sorted))
