# list.pop(x) -> Optional. A number specifying the position of the element you want to remove,
# default value is -1, which returns the last item

def main():
    pop_item(1)

def pop_item(item):
    list_to_remove = ['primeiro item', 'segundo item', 'terceiro item', 'ultimo item']
    list_to_remove.pop(item)
    print(list_to_remove)

main()