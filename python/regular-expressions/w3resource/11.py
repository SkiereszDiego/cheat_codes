# Write a Python program that matches a word at the end of string, with optional punctuation.

import re

def main(word):
  matchRegex(word)

def matchRegex(word):
  # ^ start of string
  # \w Matches any letter, digit or underscore. Equivalent to [a-zA-Z0-9_]
  # + Quantifier — Matches between one and unlimited times
  print(bool(re.search("\w+\S*$", word)))

main("The quick brown fox jumps over the lazy dog.")
main("The quick brown fox jumps over the lazy dog. ")
main("The quick brown fox jumps over the lazy dog ")