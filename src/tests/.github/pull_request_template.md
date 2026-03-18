<!-- Rappel : Ne validez (merge) JAMAIS votre propre Pull Request. -->
<!-- Demandez la relecture à au minimum 2 développeurs du projet. -->

## Description des changements

> 💡 **Exemple :** "Cette PR corrige le bouton de connexion qui se figeait lors d'une saisie incorrecte du mot de passe (cf. issue #12). Un message d'erreur rouge s'affiche désormais sous le formulaire sans recharger la page."

*Expliquez le "pourquoi" de vos changements, pas le "comment".*

---

## Type de changement

- [ ] ✨ `feat` — Nouvelle fonctionnalité
- [ ] 🐛 `fix` — Correction de bug
- [ ] 🚑 `hotfix` — Correction urgente (production)
- [ ] 📝 `docs` — Documentation uniquement
- [ ] ♻️ `refactor` — Refactoring (sans fonctionnalité ni correction de bug)
- [ ] 🎨 `style` — Formatage, espaces (sans impact sur la logique)
- [ ] 🧪 `test` — Ajout ou modification de tests
- [ ] 🔧 `chore` — Build, dépendances, CI/CD

---

## Issue liée

> 💡 **Exemple :** `Closes #12`

Closes #...

---

## Branche source

> 💡 **Exemple :** `bugfix/bouton-connexion-fige`, créée à partir de `develop`

- [ ] Cette branche a été créée à partir de `develop`
- Nom de la branche : `feature/` `bugfix/` `hotfix/` `release/` *(complétez)*

---

## Tests effectués

> 💡 **Exemple :**
> - Testé sur Chrome 123 et Firefox 124
> - Le test `AuthService.login.spec.js` passe correctement
> - Nouveau cas ajouté : "mot de passe incorrect → message d'erreur affiché"

- [ ] Testé en local
- [ ] Les tests existants passent toujours
- [ ] De nouveaux tests ont été ajoutés (si applicable)

**Détails des tests :**

*Décrivez les tests effectués.*

---

## Captures d'écran (si changements visuels)

> 💡 Ajoutez un tableau avant/après si votre PR modifie l'interface.

| Avant | Après |
|-------|-------|
|       |       |

---

## Breaking Changes

> 💡 **Exemple :** "Oui — Le paramètre `userId` de `getUser()` est maintenant obligatoire. Les appels sans argument lèveront une erreur."

- [ ] Non, pas de breaking changes
- [ ] Oui — Détails : ...

---

## Liste de vérification finale

- [ ] Mon titre respecte les Conventional Commits (ex: `fix: bouton connexion figé sur page login`)
- [ ] Mon code est rédigé et commenté en **français**
- [ ] J'ai supprimé tous les `console.log`, `print` et commentaires de débogage temporaires
- [ ] J'ai mis à jour le `README.md` si j'ai modifié l'infrastructure (ports, dépendances, variables d'environnement)
- [ ] J'ai demandé la relecture à **au moins 2** développeurs du projet
- [ ] Je n'approuverai pas ma propre PR
- [ ] J'ai respecté le [Code de Conduite](../../CODE_OF_CONDUCT.md)
