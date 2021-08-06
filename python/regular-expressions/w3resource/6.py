# Write a Python program that matches a string that has an a followed by two to three 'b'

import re

def main(word):
  isAfollowedByTwoToThreeBs(word)

def isAfollowedByTwoToThreeBs(word):
  print(bool(re.search("^ab{2,3}?", word)))

main('ab')
main('abc')
main('abbbc')
main('aabbcb')