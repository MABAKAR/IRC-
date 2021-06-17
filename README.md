# IRC-
### IRC WITH REACT-JS ,NODE-JS,MONGODB

# Chat IRC

## Introduction
Réalisation d'un serveur IRC en Node.js.

## Features 

- Système de connexion
- Le membre qui a créé son channel peut le supprimer.
- Chaque action (création, suppression, ou nouvelle connexion) sur les channels et changement de pseudo envoient un message global visible sur tous les channels
- Les membres connectés à un channel peuvent envoyer un message à tous les utilisateurs de ce channel
- Commandes d'un IRC de base
```bash
      - /nick nickname : définit le surnom de l’utilisateur au sein du serveur.
      - /list [string] : liste les channels disponibles sur le serveur. N’affiche que les channels contenant la chaîne “string” si celle-ci est spécifiée.
      - /create channel : créer un channel sur le serveur.
      - /delete channel : suppression du channel sur le serveur
      - /join channel : rejoint un channel sur le serveur.
      - /leave channel : quitte le channel.
      - /msg nickname message : envoie un message à un utilisateur spécifique.
```


## Installation & Lancement
- Télécharger le dossier
- Lancer deux terminale
- Dans le dossier "api", lancer la commande :
> Composer install ,npm start
- Dans le dossier "frontend", lancer la commande :
> Composer install npm start
- Enjoy !

## Demo
> Bientôt disponible..

## Technologies
React.js, Node.js,MongoDb, Socket.io
