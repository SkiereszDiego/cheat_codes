
def main():
  compareStrings()

def compareStrings():
  str1 = input("Primeira palavra: ")
  str2 = input("Segunda palavra: ")

  if str1 == str2:
    return print('Igual')
  else:
    return print("Diferente")

main()