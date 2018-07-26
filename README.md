# Commande de VIM
Issue du didacticiel/tutoriel d'OpenClasseRooms : [VIM éditeur de texte du programmateur](https://openclassrooms.com/fr/courses/43538-reprenez-le-controle-a-laide-de-linux/42693-vim-lediteur-de-texte-du-programmeur)
Et du dicticiel/tutoriel intégré à vim : __vimtutor__

## Lancer VIM
    vim

## Mode Normal/Interactif (Par défaut)

## Mode Insertion
    Entrer : "i"
    Sortir : "Echap"

## Mode Commande
    Entrée : ":"
    Valider : "Entrée"


## L'utilisation

## Edition
* Curseur : _H, J, K, L = gauche, bas, haut, droite_
* Quitter sans enregistrer : _:q! <Entrée>_ / (Passage en mode commande, et action _q!_)
* Effacer : _X_
* Ajouter du texte : _A_
* Enregistrer et quitter : _:wq_
* Ouvrir un fichier à editer : _vim FichierAOuvrir_

## Opérateur
Format : _Opérateur Nombre Déplacement_
* Mouvement :
    * _w_ : Jusqu'au début du prochain mot
    * _e_ : Jusqu'avant la dernière lettre du mot courant
    * _$_ : Jusqu'à la fin de la ligne
    * _0_ : Revient au début de la ligne

* Effacement : _d_
    se placer au début (du mot, de la ligne) et taper
    * Effacer un mot : _dw_
    * Effacer 2 mots : _d2w_
    * Effacer jusqu'à la fin de la ligne : _d$_
    * Effacer la ligne : _dd_
    * Effacer 2 ligne : _2dd_

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
* Pour rechercher une phrase dans la direction opposé : _? + "la phrase"_
