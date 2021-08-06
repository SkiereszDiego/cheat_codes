# Write a Python program that matches a word at the beginning of a string.

import re

def main(word):
  upperCaseLetterFollowedByLowerCaseLetters(word)

def upperCaseLetterFollowedByLowerCaseLetters(word):
  # ^ start of string
  # \w Matches any letter, digit or underscore. Equivalent to [a-zA-Z0-9_]
  # + Quantifier — Matches between one and unlimited times
  print(bool(re.search("^\w+", word)))

main("The quick brown fox jumps over the lazy dog.")
main(" The quick brown fox jumps over the lazy dog.")