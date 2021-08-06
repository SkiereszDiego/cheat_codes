# GIT

### Sempre dar o switch na master/main

#### CRIAR

```git
git switch -c name-branch
```

#### TROCAR

```git
git switch name-branch
```

quando estiver na master

```git
git pull
```
serve para atualizar com a master sem criar um "merge pull request"

```git
git rebase master
```

o próximo push apos o rebase
```git
git push -f
```

## GIT STASH

### GIT STASH - salva uma cópia

Entrada
```shell
git stash
```

Saída
```text
Saved working directory and index state WIP on feature-exemple: 120c87e Merge pull request #1 from repo/branch
```

### GIT STASH LIST - lista todos os stash

Entrada
```shell
git stash list
```

Saída
```shell
stash@{0}: WIP on feature-exemple: 120c87e Merge pull request #1 from repo/branch
stash@{1}: WIP on feature-exemple: 120c87e Merge pull request #1 from repo/branch
```

### GIT STASH DROP STASH@{indice = 0 || 1 || n}

Entrada
```shell
git stash drop stash@{0}
```

Saída
```shell
Dropped stash@{0} (96650c6a7db63c4237f35628fc52c518984ef2ba)
```

### GIT STASH APPLY STASH@{0}

Entrada
```shell
git stash apply stash@{0}
```

Saída
```shell
No ramo "branch"
Changes not staged for commit:
  (utilize "git add <arquivo>..." para atualizar o que será submetido)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   app/src/index.js
        modified:   app/src/file.js

nenhuma modificação adicionada à submissão (utilize "git add" e/ou "git commit -a")
```

### GIT STASH SAVE "O QUE TU QUER SALVAR"

Entrada
```shell
git stash save Atualizando a cheat-sheet
```

Saída
```shell
Saved working directory and index state On master: Atualizando a cheat-sheet
```