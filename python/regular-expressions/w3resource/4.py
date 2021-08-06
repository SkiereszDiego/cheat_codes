# Write a Python program that matches a string that has an a followed by zero or one 'b'.

import re

def main(word):
  isAfollowedByZeroOrOneB(word)

def isAfollowedByZeroOrOneB(word):
  print(bool(re.search("^ab?", word)))

main('ab')
main('abc')
main('abbc')
main('aabbc')