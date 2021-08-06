
def main():
    find_index_by_int()
    find_index_by_string()

def find_index_by_int():
    list = [1, 5, 5, 6, 8, 10]
    number_index = list.index(5) # Só retorna a primeira ocorrência
    print(number_index)

def find_index_by_string():
    list = ['Allan', 'Foppa', 'Fagundes']
    name_index = list.index('Foppa')
    print(name_index)

main()