# Write a Python program that matches a string that has an 'a' followed by anything, ending in 'b'.

import re

def main(word):
  upperCaseLetterFollowedByLowerCaseLetters(word)

def upperCaseLetterFollowedByLowerCaseLetters(word):
  # .*? matches any character
  # *? Quantifier — Matches between zero and unlimited times
  print(bool(re.search("a.*?[b]$", word)))

main("aabbbbd")
main("aabAbbbc")
main("accddbbjjjb")