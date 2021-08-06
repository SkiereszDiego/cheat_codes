# Write a Python program that matches a string that has an a followed by zero or more b's.

import re

def main(word):
  isAfollowedByB(word)

def isAfollowedByB(word):
  print(bool(re.search("^ab*", word)))

main('acb')
main('abc')
main('abbc')