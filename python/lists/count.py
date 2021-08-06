
def main():
    count_item_on_list()

def count_item_on_list():
    list = ['item', 'item 1', 'item 2', 'item', 'item 3']
    times = list.count('item')
    print(times)

main()