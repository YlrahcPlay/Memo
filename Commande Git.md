## Verification de la version
    git --version

## Configuration
    git config --global user.name "Ylrahc_Play"
    git config --global user.email "Ylrahc_Play@myEmail.com"

## Commande de base
### Création d'un répertoire :
    mkdir MonProjet
### Se déplacer dans le répertoire :
    cd MonProjet
### Initialiser Git :
    git init
### Statut des fichiers :
    git status
### Séléctionner les fichiers à enregistrer :
    git add MonFichier
    git add --all
### Enregistrer les changements
    git commit -m "Commentaire expliquant le changement"

### Visualisation des différents enregistrement effectué
    git log

## Branches
### Créer une branche
    git branch NomBranche
### Lister les branches
    git branch
### Changer de branche
    git checkout NomBranche
### Pour fusionner la branche alternative à la branche principale
* Séléctionner la branche principale "*git checkout master*"
* Fusionner les branches "*git merge NomBranche*"
* Supprimer la branche devenu inutile "*git branch -d NomBranche*"

## Dépôt distant
### Associer un dépôt
    git remote add origin https://urlDuDepot.git
    git remote add NomDepot UrlDepot.git
### Déposer le projet sur le dépôt
    git push origin master
    git push NomDepot NomBranche
### Récupérer un projet du dépôt
    git pull origin master
    git pull NomDepot NomBranche
