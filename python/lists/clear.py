
def main():
    clear_list()

def clear_list():
    list_to_clean = ['primeiro item', 'segundo item', 'terceiro item', 'ultimo item']
    print(list_to_clean)
    list_to_clean.clear()
    print(list_to_clean)
    list_to_clean = ['outro item', 'noutro item', 'denovo item', 'ultimo item']
    print(list_to_clean)

main()