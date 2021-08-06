# Assim contorna o problema de não chamar uma classe ainda não criada

def main():
  helloWorld(1)
  helloAgain(2)

def helloWorld(n):
  for i in range(n):
    print('Hello World!')

def helloAgain(n):
  for i in range(n):
    print('Hello Again!')

main()