# copy() parameters
# The copy() method doesn't take any parameters.

list = ['cat', 0, 6.7]

new_list = list.copy()
# copying a list using slicing
# new_list = list[:]

new_list.append('dog')

print('Old List:', list)
print('New List:', new_list)