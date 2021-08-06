# Write a Python program to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9).

import re

def main(regex):
  checkCharacters(regex)

def checkCharacters(regexToCheck):
  print(bool(re.search("[a-z/A-Z/0-9]", regexToCheck)))

main("ABCDEFabcdef123450")
main("*&%@#!}{")