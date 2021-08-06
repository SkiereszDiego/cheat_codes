import re

def main():
  callSearchWithRE()

# SEM RE
def callSeach():
  res = response()

  if res.lower() in ["s", "sim"]:
    print('Aceitou')
  elif res.lower() in ["n", "nao", "não"]:
    print('Não aceitou')
  else:
    print("Não respondeu corretamente")

def callSearchWithRE():
  res = response()

  if re.search("^s(im)?$", res, re.IGNORECASE):
    print("Aceitou")
  elif re.search("^n((ã|a)o)?$", res, re.IGNORECASE):
    print("Não aceitou")
  else:
    print("Não respondeu corretamente")

def response():
  res = input('Você concorda? ')
  return res

main()