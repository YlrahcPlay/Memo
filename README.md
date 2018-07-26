# Commande de VIM
Issue du didacticiel/tutoriel d'OpenClasseRooms : [VIM éditeur de texte du programmateur](https://openclassrooms.com/fr/courses/43538-reprenez-le-controle-a-laide-de-linux/42693-vim-lediteur-de-texte-du-programmeur)

Et du dicticiel/tutoriel intégré à vim : __vimtutor__


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
* _H, J, K, L = gauche, bas, haut, droite_ : Déplacment

* _vim_ : Lance VIM et ouvre un nouveau document
* _vim FichierAOuvrir_ : Ouvrir un fichier à editer
* _:w "adresse du fichier"_ : Enregistrer un nouveau fichier
* _:w_ : Enregistrer
* _:wq_ : Enregistrer et quitter
* _:q!_ : Quitter sans enregistrer

## Edition
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

### Supprimer
* _x_ : Supprim un caractère
* _Nb + x_ : Supprimer le nombre de caractère indiqué
* _d + Nb + mouvement_ :
    * _dw_ : Supprimer le mot après le curseur
    * _d2w_ : Supprimer 2 mots après le curseur
    * _d0_ : Supprimer jusqu'à la fin de la ligne
    * _d$_ : Supprimer jusqu'à la fin de la ligne
    * _dd_ : Supprimer la ligne
    * _2dd_ : Supprimer 2 lignes

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

### Remplacer
* _r + "la lettre"_ : Remplacer la lettre après le curseur
* _R_ : Remplacer le texte (Mode Remplacement)
* _:s/ancien/nouveau_ : Change la premiére occurence d'"ancien" par "nouveau"
* _:s/ancien/nouveau/g_ : Change toute les occurence de la ligne
* _:#,#s/ancien/nouveau/g_ : Change toute les occurences entre les lignes indiqué
* _:%s/ancien/nouveau/g_ : Change toute les occurences dans tout le fichier
* _:%s/ancien/nouveau/gc_ : Trouve toute les occurences dans le fichier avec demande de confirmation pour chaque occurence


## Opérateur


* Changement : _c_
    * Changer une fin de mot : _ce_ + "la fin du mot"
    * Changer une fin de ligne : _c$_ + "la fin de la ligne"

* Annulation :
    * _u_ : annuler la dernière comande
    * _U_ : Récupère toute la ligne
    * Annuler l'annulation : _CTRL + R_

* Coller : (Effacer ce que vous voulez couper/copier puis taper) _p_
* Remplacer : _r_ + "la lettre de remplacement"

## Position du curseur et état du fichier
* _CTRL + G_ : Affiche la position du curseur et l'état du ficher
* _G_ : Se déplacer à la fin du fichier
* _gg_ : Se déplacer au début du fichier
* _numéro + G_ : Se déplacer à la ligne indiqué

## La Recherche
* _/ + "Le mot ou la phrase"_
* _n_ : recherche à nouveau
* _N_ : recherche à nouveau mais dans la direction opposé
* Pour rechercher dans la direction opposé : _? + "le mot, la phrase"_
* _%_ : Permet de naviguer entre les parenthèses, crochet ... correspondant

## La Substitution


## Executer une commande externe
* _:!_
* _:!ls_ : liste tout les fichiers du répertoire courant

## Enregistrement
* _:w + "Nom du fichier"_ : enregistre un nouveau fichier

## Séléction visuelle
* _v_

## Insertion texte issue fichier
* _:r + "adresse du fichier"_
* _:r !ls_ : execute la commande et insert le résultat

## Commande d'ouverture
* _o_ : Ouvre une ligne sous le curseur et passe en insertion
* _O_ : Ouvre une ligne sur le curseur et passe en insertion

## Commande d'ajout


## Autre manière de remplacer
* _R + "Ecriture du texte"_ : Mode Remplacement

## Copier-Coller
* _y_ : copier le texte selectionné
* _p_ : pour coller

## Réglage des options
* _:set ic_ : ignore la casse
* _:set hls_ : (hlsearch) surbrille toute les occurences du texte recherché
* _:set is_ : (incsearch) montre les occurences partiels

* _:set noic_ : désactive l'ignorance de la casse
* _:set nohlsearch_ / _:set nohls_: désactive la surbrillance
* _/mot\c_ : igniore la casse un uniquement pour cette recherche

## Aide
* _:help_ : Ouvre une fenêtre d'aide
* _CTRL + W_ : passe d'une page à l'autre
* _:q_ : pour quitter la fenêtre d'aide

## Auto-Compléssion
* _CTRL + D_ : affiche la liste des commande qui commence par l.a.es lettre.s indiquée.s
