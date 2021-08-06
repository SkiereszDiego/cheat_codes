# list.remove(x)

def main():
    remove_item('terceiro item')

def remove_item(item):
    list_to_remove = ['primeiro item', 'segundo item', 'terceiro item', 'ultimo item']
    list_to_remove.remove(item)
    print(list_to_remove)

main()