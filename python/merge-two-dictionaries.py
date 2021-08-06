# How to merge two dictionaries

def main():
    mergeDict()

x = {'a': 1, 'b': 2}
y = {'b': 3, 'c': 4, 'd': 6}

def mergeDict():
    z = {**x, **y}
    print(z)

main()