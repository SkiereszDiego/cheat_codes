# Write a Python program to find the sequences of one upper case letter followed by lower case letters.

import re

def main(word):
  upperCaseLetterFollowedByLowerCaseLetters(word)

def upperCaseLetterFollowedByLowerCaseLetters(word):
  print(bool(re.search("[A-Z][a-z]", word)))

main("aab_cbBBX")
main("aab_Abbbc")
main("Aaab_abbbc")