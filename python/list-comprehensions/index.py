

# list = [expr for item in lista if condition]

# Esse aqui se equivale ao de baixo
lista = [item**2 for item in range(10) if item % 2 == 0]

for item in range(10):
    if item % 2 == 0:
        lista.append(item**2)


print (lista)