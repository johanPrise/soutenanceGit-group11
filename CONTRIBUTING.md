# Guide de Contribution

Merci de vouloir contribuer à ce projet ! 🎉 
Ce document explique le processus pour proposer des modifications, signaler des bugs ou suggérer des améliorations. Veuillez noter que nous avons un [Code de Conduite](CODE_OF_CONDUCT.md), merci de le respecter dans toutes vos interactions.

## 1. Langue du projet

**IMPORTANT : La langue officielle de ce dépôt (code, commentaires, commits et Pull Requests) est le Français.** 
*(Adaptez cette phrase si c'est l'Anglais)*

* Les noms de variables, fonctions et classes doivent être explicites.
* Les commentaires de code doivent expliquer le "pourquoi" et non le "comment".
* Les messages de commit doivent suivre la syntaxe des [Conventional Commits](https://www.conventionalcommits.org/). Ex: `feat: ajout du formulaire de contact` ou `fix: correction de la marge sur mobile`.

## 2. Conventions GitFlow et Noms de Branches

Nous utilisons une approche basée sur **GitFlow** pour gérer l'évolution de notre projet.

* **`main`** : Branche principale contenant le code en production (stable).
* **`develop`** : Branche de développement contenant les dernières fonctionnalités prêtes pour la prochaine release.

**Noms de nos branches :**
Pour toute nouvelle contribution, vous ne devez **jamais** pousser directement sur `main` ou `develop`. **TOUTES les nouvelles branches doivent obligatoirement être créées à partir de `develop`.**

Créez toujours une nouvelle branche en respectant ces préfixes :

* `feature/ma-fonctionnalite` : Pour l'ajout d'une nouvelle fonctionnalité.
* `bugfix/mon-bug` : Pour la correction d'un bug non urgent.
* `hotfix/mon-probleme-urgent` : Pour la correction d'un bug (même critique en production).
* `release/X.Y.Z` : Pour préparer une nouvelle version.

## 3. Format strict d'une Pull Request (PR)

Toute modification du code doit passer par une Pull Request (PR) correctement formatée.

**Règles pour la PR :**
1. **Titre clair :** Il doit respecter les Conventional Commits (ex: `feat: ajout de l'interface de connexion`).
2. **Template obligatoire :** Remplissez intégralement le Template de Pull Request fourni (Description des changements, Issue liée, Liste de vérification).
3. **Mise à jour de la Doc :** Si votre code change l'infrastructure (variables d'environnement, ports, dépendances), **mettez à jour le `README.md`** dans la même PR.
4. **Clean Code :** Assurez-vous d'avoir retiré tous vos `console.log`, `print`, ou commentaires de débogage temporaires avant de soumettre la PR.

## 4. Processus de Validation (Attention ⚠️)

**Règle d'or : Ne tentez JAMAIS de valider (merge) votre propre Pull Request.**

Même si le dépôt est configuré pour rejeter automatiquement toute PR qui n'a pas été approuvée (via les protections de branches), il est **strictement interdit** d'essayer de forcer ou d'approuver soi-même sa PR pour éviter toute confusion dans l'équipe.

**Comment ça se passe :**
1. Vous ouvrez votre PR.
2. Demandez la relecture (Review) à **au moins deux** autres développeurs du projet.
3. Une fois qu'ils ont vérifié, commenté et testé votre code en local, **ce sont eux** qui s'occuperont d'approuver (Approve) votre travail.
4. Si vous n'avez pas les droits, vous pouvez demander au deuxième relecteur de faire le "Merge" final pour vous.
