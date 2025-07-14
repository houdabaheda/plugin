# modal-hrnet-plugin

Modale réutilisable pour applications React (exemple d'intégration pour HRnet)

## Description

Ce composant React fournit une modale simple et accessible pour afficher des messages de confirmation, d’erreur ou d’alerte.

## Installation

```bash
npm install modal-hrnet-plugin

```

## Utilisation

```jsx
import React, { useState } from 'react';
import Modal from 'modal-hrnet-plugin';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Ouvrir la modale
      </button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        message="Ceci est un test de modale !"
      />
    </div>
  );
}

export default App;

```

## Props



| Prop    | Type     | Obligatoire | Description                                  |
| ------- | -------- | ----------- | -------------------------------------------- |
| isOpen  | bool     | Oui         | Contrôle l’ouverture de la modale            |
| onClose | function | Oui         | Fonction appelée à la fermeture de la modale |
| message | string   | Oui         | Message à afficher dans la modale            |


## Auteur

Houda Baheda

## Licence

MIT
