# Write a Python program that matches a string that has an a followed by zero or one 'b'.

import re

def main(word):
  isAfollowedByThreeBs(word)

def isAfollowedByThreeBs(word):
  print(bool(re.search("^ab{3}?", word)))

main('ab')
main('abc')
main('abbbc')
main('aabbcb')