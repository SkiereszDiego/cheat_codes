# Adaptado de amazing.python

import datetime

response = input("Insira a data: ex: 29/10/2020 \n").split('/')

resDate = int(response[0])
resMonth = int(response[1])
resYear = int(response[2])

days = [
  "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"
]

def dayOfDate(year, month, day):
  return days[datetime.date(year, month, day).weekday()]

if __name__=="__main__":
  print(dayOfDate(resYear, resMonth, resDate))