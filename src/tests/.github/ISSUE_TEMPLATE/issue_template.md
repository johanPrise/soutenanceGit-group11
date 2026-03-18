---
name: "Rapport de Bug / Demande de Fonctionnalité"
about: "Signalez un bug ou proposez une amélioration"
title: "fix: titre court et descriptif"
labels: ""
assignees: ""
---

<!-- Avant de soumettre, vérifiez qu'une issue similaire n'existe pas déjà. -->
<!-- Pour signaler un comportement inapproprié : prisojohan2@gmail.com -->

## Type d'issue

- [ ] 🐛 Bug
- [ ] ✨ Nouvelle Fonctionnalité (feature)
- [ ] 📝 Amélioration de la Documentation
- [ ] ♻️ Refactoring
- [ ] ❓ Question

---

## Description

> 💡 **Exemple Bug :** "Le bouton de connexion ne répond pas après une saisie incorrecte du mot de passe."
> 💡 **Exemple Feature :** "Ajouter des notifications par email lorsqu'une PR est assignée à un reviewer."

*Remplacez ce texte par votre description.*

---

## 🐛 Pour les Bug Reports

### Étapes pour reproduire

> 💡 **Exemple :**
> 1. Aller sur la page `/login`
> 2. Entrer un email valide et un mot de passe incorrect
> 3. Cliquer sur "Se connecter"
> 4. Observer que la page se fige sans afficher de message d'erreur

1.
2.
3.

### Comportement actuel

> 💡 **Exemple :** "La page se fige et aucun message d'erreur n'est affiché. L'utilisateur ne sait pas que ses identifiants sont incorrects."

*Décrivez ce qui se passe actuellement.*

### Comportement attendu

> 💡 **Exemple :** "Un message d'erreur rouge doit s'afficher sous le formulaire : 'Email ou mot de passe incorrect.'"

*Décrivez ce qui devrait se passer.*

### Captures d'écran / Logs

> 💡 **Exemple de log :**
> ```
> TypeError: Cannot read properties of undefined (reading 'token')
>     at AuthService.login (auth.service.js:42)
> ```

*Glissez vos captures ou collez vos logs ici.*

### Environnement

> 💡 **Exemple :** macOS Ventura 13.4 · Chrome 123 · v1.2.0 · Node 20.11.0

| Élément           | Version / Info |
|-------------------|----------------|
| OS                |                |
| Navigateur        |                |
| Version du projet |                |
| Node / Python     |                |

---

## ✨ Pour les Demandes de Fonctionnalité

### Problème résolu

> 💡 **Exemple :** "Je dois aller manuellement sur GitHub pour savoir si une PR attend ma relecture, ce qui me fait perdre du temps."

*Décrivez le problème que cette fonctionnalité résoudrait.*

### Solution proposée

> 💡 **Exemple :** "Envoyer un email automatique lorsqu'un reviewer est assigné à une PR."

*Décrivez la solution souhaitée.*

### Alternatives considérées

> 💡 **Exemple :** "J'ai envisagé un webhook vers Slack, mais l'email est plus universel pour toute l'équipe."

*Décrivez les alternatives que vous avez envisagées.*

---

## Contexte supplémentaire

*Tout lien, documentation ou information utile.*

---

## Liste de vérification avant soumission

- [ ] J'ai vérifié qu'une issue similaire n'existe pas déjà
- [ ] Mon titre respecte les Conventional Commits (ex: `fix: bouton connexion figé`, `feat: notifications email`)
- [ ] J'ai rédigé cette issue en **français**
- [ ] J'ai respecté le [Code de Conduite](../../CODE_OF_CONDUCT.md)
