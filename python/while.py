from time import sleep

i = 1

while True:
  print(i)
  sleep(1)
  i *= 2
  if i > 5000:
    break