# Guess the output amazing.python

count = 10

def fun1():
  count = 0
  for i in range(5):
    count+=i

def fun2():
  global count
  count = 0
  for i in range(5):
    count+=i
    # print('Iteração', i)
    # print('Contador + Iteração', count)

fun1()
print(count)

fun2()
print(count)