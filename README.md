# PostgreSQL en ligne de commande
    Pour utiliser ce commande il faut ce placer dans le dossier où ce trouve les executables (.exe) de PostgreSQL
    cd C:\Program Files\PostgreSQL\9.5\bin

## Options
__Options de connexion__
* -h, --host <nom>      : hôte du serveur de bases de données ou repertoire du sockets
* -p, --port <numéro>   : numéro de port du serveur de bases de données
* -d, --dbname <nom>    : base de donnée à utiliser
* -U, --username <nom>  : se connecte avec cet utilisateur
* -w, --no-password     : ne demande jamais le mot de passe
* -W, --password        : force la demande du mot de passe

__Options générales__
* -f, --file <nom>      : nom du fichier ou du répertoire en sortie
* -F, --format <c|d|t|p>: personnalisé (custom), répertoire (directory), tar, texte (plain) (par défaut)
* -v, --verbose         : mode verbeux (exprime les problèmes)
* -V, --version         : affiche la version et quitte

__Option sur le contenu__
* -c, --clean           : nettoie/supprime les objets de la base de donnée avant de les créer
* -C, --create          : crée la base de données cible
* -a, --data-only       : restaure uniquement les données, pas la structure
* -s, --schema-only     : restaure uniquement la structure, pas les données
* -n, --schema <nom>    : restaure uniquement les objets de ce schéma
* -t, --table <nom>     : restaure la table indiqué
* -P, --fonction <nom>  : restaure la fonction indiqué
* -T, --trigger <nom>   : restaure le trigger indiqué
* --if-exists           : utilise IF EXISTS lors de la suppresion des objets

## Sauvegarder
    pg_dump.exe --host <hôte> --port <port> --user <utilisateur> --no-password --format <format> --blobs --verbose --file <adresse du fichier>
    pg_dump.exe -h <hôte> -p <port> -U <utilisateur> -w -F <format> -b -v -f <adresse du fichier>

__Option spécifique sur le contenu__
* -E, --encoding <nom>  : sauvegarde les données dans l'encodage spécifé
* -b, --blobs           : inclut les "Large Objects" dans la sauvegarde
* -Z, --compress <0-9>  : niveau de compression pour les formats compressés

## Restaurer
    pg_restore.exe --host <hôte> --port <port> --username "<utilisateur>" --dbname "<nom de la base>" --no-password --verbose --file "<adresse du fichier>"
    pg_restore.exe -h <hôte> -p <port> -U <Utilisateur> -d <nom de la base> -w -n <schema> -v -f <adresse du fichier>
