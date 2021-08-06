import csv

# Get name and number
name = input("Name: ")
number = input("Number: ")

# Open CSV file
# "w" sobre escreve
# "a" acrescenta os valores
with open("save-info-csv/phonebook.csv", "a") as file:
  writer = csv.writer(file)
  writer.writerow((name, number))