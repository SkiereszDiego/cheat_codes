# Write a Python program to find sequences of lowercase letters joined with a underscore.

import re

def main(word):
  findSequencesOfLowercaseLettersJoinedWithUnderscore(word)

def findSequencesOfLowercaseLettersJoinedWithUnderscore(word):
  print(bool(re.search("^[a-z]+_[a-z]+$", word)))

main("aab_cbbbc")
main("aab_Abbbc")
main("Aaab_abbbc")