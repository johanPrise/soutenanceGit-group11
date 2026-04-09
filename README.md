# soutenanceGit-group11

## Qualite du code

- Verifier les erreurs de style et de qualite:

```bash
npm run lint
```

- Corriger automatiquement les erreurs corrigibles par ESLint:

```bash
npm run lint:fix
```

Resultat attendu: `npm run lint` termine sans erreur lorsque le code respecte les regles ESLint. `npm run lint:fix` applique automatiquement les corrections possibles, puis un nouveau lint doit idealement passer sans erreur.