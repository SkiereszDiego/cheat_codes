# vowels list
vowels = ['e', 'a', 'u', 'o', 'i']

# sort the vowels
vowels.sort(reverse=True)
vowels.sort()

# print vowels
print('Sorted list:', vowels)

# take second element for sort
def order_from_second_el(elem):
    return elem[1]

# random list
random = [(2, 2), (3, 4), (4, 1), (1, 3)]

# sort list with key
random.sort(key=order_from_second_el)

# print list
print('Sorted list:', random)