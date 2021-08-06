import os
cwd = os.getcwd()
print(cwd)

with open("python/concat-files/file.txt") as file1:
  text = file1.read()

with open("python/concat-files/file2.txt") as file2:
  text2 = file2.read()

with open("python/concat-files/file3.txt", "w") as file3:
  file3.write(text+"\n"+text2)