# Quantidade de números positivos e negativos

numbers = [ 1, -5, 5, 10, 12, -32, 12, 12, 52 ]

pos, neg = 0,0

for num in numbers:
  if num >= 0:
    pos += 1
  else:
    neg += 1

print('Positive numbers quantity: ', pos)
print('Negative numbers quantity: ', neg)