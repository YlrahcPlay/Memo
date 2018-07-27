# Commande de VIM
Issue du didacticiel/tutoriel d'OpenClasseRooms : [VIM éditeur de texte du programmateur](https://openclassrooms.com/fr/courses/43538-reprenez-le-controle-a-laide-de-linux/42693-vim-lediteur-de-texte-du-programmeur)


## Mode Normal/Interactif (Par défaut)

## Mode Insertion
    Sortir : "Echap"
* Insertion : _i_
* Remplacement : _R_
* Visualisation : _v_

## Mode Commande
    Entrée : ":"
    Valider : "Entrée"


## L'utilisation
* _vim_ : Lancer VIM et ouvrir un nouveau document
* _vim "adresse du fichier"_ : Ouvrir le fichier cible en edition
* _:w "adresse du fichier"_ : Enregistrer un nouveau fichier
* _:w_ : Enregistrer
* _:wq_ : Enregistrer et quitter
* _:q!_ : Quitter sans enregistrer

## Edition
### Direction
* _h, j, k, l = gauche, bas, haut, droite_ : Déplacement du curseur

_Opérateur Nombre Déplacement_ : Format des commandes

### Mouvement
* _w_ : Avance jusqu'au début du prochain mot
* _b_ : Revient au mot précédant
* _e_ : Avance jusqu'à la dernière lettre du mot courant
* _ge_ : Revient à la fin du mot précédant
* _$_ : Jusqu'à la fin de la ligne
* _0_ : Revient au début de la ligne

### Inserer
* _i_ : Insérer au curseur
* _a_ : Ajouter après le curseur
* _A_ : Ajouter à la fin de la ligne
* _o_ : Ouvre une ligne dessous le curseur et passe en insertion
* _O_ : Ouvre une ligne dessus le curseur et passe en insertion

* _:r + "adresse du fichier"_ : Inserer le contenu du fichier ciblé
* _:r !ls_ : Executer la commande et inserer le résultat

### Supprimer
* _x_ : Supprimer un caractère en aval
* _X_ : Supprimer un caractère en amont
* _Nb + x_ : Supprimer en aval le nombre de caractère indiqué
* _d + Nb + mouvement_ :
    * _dw_ : Supprimer le mot après le curseur
    * _d2w_ : Supprimer 2 mots après le curseur
    * _d0_ : Supprimer jusqu'à la fin de la ligne
    * _d$_ : Supprimer jusqu'à la fin de la ligne
    * _dd_ : Supprimer la ligne
    * _2dd_ : Supprimer 2 lignes

### Remplacer
* _r + "la lettre"_ : Remplacer la lettre après le curseur
* _R_ : Remplacer le texte (Mode Remplacement)
* _c + mouvement_ :
    * _ce_ : Supprimer la fin du mot et passer en mode insertion
    * _c$_ : Supprimer la fin de la ligne et passer en mode insertion
    * _cc_ : Supprimer la ligne et passer en mode insertion

* _:s/ancien/nouveau_ : Changer la premiére occurence d'"ancien" par "nouveau"
* _:s/ancien/nouveau/g_ : Changer toute les occurence de la ligne
* _:Nb,Nbs/ancien/nouveau/g_ : Changer toute les occurences entre les lignes indiquées
* _:%s/ancien/nouveau/g_ : Changer toute les occurences dans tout le fichier
* _:%s/ancien/nouveau/gc_ : Trouver toute les occurences dans le fichier avec demande de confirmation pour chaque occurence

### Annuler
* _u_ : Annuler la dernière commande
* _Nb + u_ : Annuler le nombre de commande indiqué
* _U_ : Annuler toute les modification de la ligne
* _CTRL + r_ : Annuler l'annulation

### Déplacement dans le fichier
* _G_ : Se déplacer à la fin du fichier
* _gg_ : Se déplacer au début du fichier
* _Nb + G_ : Se déplacer à la ligne indiqué

### Rechercher
* _/ + "Le mot ou la phrase"_ : Rechercher un mot / une phrase en aval
    * _/ + "Le mot ou la phrase" + \c_ : Rechercher un mot / une phrase en ignorant la casse
* _? + "Le mot ou la phrase"_ : Rechercher en amont
* _n_ : Rechercher à nouveau en aval
* _N_ : Recherche à nouveau en amont

* _%_ : Permet de naviguer entre les parenthèses, crochet ... correspondant

### Casse
_Après avoir séléctionner du texte en mode visualisation (v)_
* _u_ : Mettre en minuscule
* _U_ : Mettre en Majuscule

### Copier/Couper - Coller
__Copier__
* _y + mouvement_ :
    * _yw_ : Copier le mot après le cureur
    * _y$_ : Copier jusqu'à la fin de la ligne
    * _yy_ : Copier la ligne

__Couper__
* _d + mouvement_

__Coller__
* _p_ : Coller
* _Nb + p_ : Coller autant de fois qu'indiqué


## Ecran
### Découper
* _:sp_ : Découper l'écran horizontalement
* _:sp + "adresse du fichier"_ : Découper l'écran en 2 + ouverture d'un nouveau fichier
* _:vsp_ : Découper l'écran verticalement

### Naviguer
* _"CTRL + w" + "CTRL + w"_ : Naviguer vers la fenêtre suivante
* _"CTRL + w" + direction_ :
    * _"CTRL + w" + j_ : Naviguer vers la fenêtre en bas
    * _"CTRL + w" + k_ : Naviguer vers la fenêtre en haut
    * _"CTRL + w" + h_ : Naviguer vers la fenêtre à gauche
    * _"CTRL + w" + l_ : Naviguer vers la fenêtre en droite
* _"CTRL + w" + "+"_ : Agrandir la taille de la fenêtre
* _"CTRL + w" + "-"_ : Diminuer la taille de la fenêtre
* _"CTRL + w" + "="_ : Egaliser la taille des fenêtres
* _"CTRL + w" + "r"_ : Echanger la position des fenêtres
* _"CTRL + w" + "q"_ : Fermer la fenêtre actuel


## Executer une commande externe
* _:!_
* _:!ls_ : liste tout les fichiers du répertoire courant


## Voir l'état du fichier et la position du curseur
* _CTRL + G_ : Affiche la position du curseur et l'état du ficher


## Réglage des options
* _:set "Option"_ : Activer l'option
* _:set "Option"?_ : Connaître l'état de l'option
* _:set no"Option"_ : Désactiver l'option

* _syntax_ / _syn_ (_=ON_/_=OFF_) : Activer la coloration syntaxique
* _background_ / _bg_ (_=dark_/_=light_): Adapter la coloration au fond
* _number_ : Afficher le numéro des lignes
* _showcmd_ : Afficher la commande en cours
* _ignorecase_ / _ic_ : Ignorer la casse lors de la recherche
* _hlsearch_ / _hls_ : Mettre en surbrillance toute les occurences du texte recherché
* _incsearch_ / _is_ : Montrer les occurances partiels
* _mouse=a_ : Activer le déplacement avec la souris


## Aide
* _:help_ : Ouvrir une fenêtre d'aide


## Auto-Complétion
* _CTRL + D_ : Afficher la liste des commandes qui commence par l.a.es lettre.s indiquée.s
