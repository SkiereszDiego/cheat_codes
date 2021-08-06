# list.insert(i, x)

def main():
    insert_item('terceiro item')

def insert_item(item):
    list_to_insert = ['primeiro item', 'segundo item', 'ultimo item']
    list_to_insert.insert(2, item)
    print(list_to_insert)

main()