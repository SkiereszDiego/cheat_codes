# Write a Python program that matches a string that has an a followed by one or more b's.

import re

def main(word):
  isAfollowedByOneOrMoreB(word)

def isAfollowedByOneOrMoreB(word):
  print(bool(re.search("^ab+?", word)))

main('acb')
main('abc')
main('abbc')