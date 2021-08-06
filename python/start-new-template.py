import os
from pathlib import Path
import json

# SCRIPT PROMPT COLORS
class colors:
  HEADER = '\033[95m'
  BLUE = '\033[94m'
  CYAN = '\033[96m'
  GREEN = '\033[92m'
  WARNING = '\033[93m'
  FAIL = '\033[91m'
  END = '\033[0m'
  BOLD = '\033[1m'
  UNDERLINE = '\033[4m'

# TEMPLATE NAME
print(colors.HEADER + 'Nome do template: ' + colors.END)
name = input()

# TEMPLATE RESUME
print(colors.HEADER + 'Resumo: ' + colors.END)
resume = input()

# TEMPLATE LINK
link = name.replace(' ', '-').lower()

# ADD TO JSON DE OBJECT
def write_json(data, filename='template-list.json'):
  with open(filename,'w') as f:
    json.dump(data, f, indent=4)

with open('template-list.json') as json_file:
  data = json.load(json_file)

  arr = data['templates']

  # OBJECT TO APPEND TO JSON
  template = {
    "title": name,
    "resume": resume,
    "link": link
  }

  # APPENDING DATA TO "TEMPLATES"
  arr.append(template)

# CREATE DIRECTORY
# Get current path of project
path = os.getcwd()
# Current path + templates folder
pathToCreateFolder = path + '/templates/' + link

# define the access rights
access_rights = 0o777

folderExist = os.path.isdir(pathToCreateFolder)

if folderExist == True:
  print(colors.WARNING + 'Já existe um template com esse nome, favor escolher outro.' + colors.END)
else:
  write_json(data)
  os.mkdir(pathToCreateFolder, access_rights)
  os.chdir(pathToCreateFolder)
  os.mkdir('images')
  Path(pathToCreateFolder + '/index.html').touch()
  print(colors.GREEN + 'Diretorio criado!' + colors.END)
  print(colors.BLUE + 'Rode o comando `npm run dev`' + colors.END)