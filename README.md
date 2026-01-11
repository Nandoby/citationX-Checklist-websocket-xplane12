# ✈️ Cessna Citation X - Interactive Checklist

Application web moderne et performante conçue pour assister les pilotes virtuels sur **Cessna Citation X (C750)**. L'interface offre une gestion fluide des procédures de vol.

## ✨ Points forts de l'application

- **Navigation par Phase** : Structure organisée selon les procédures réelles (Preliminary, Exterior Inspection, Cockpit Prep, etc.).

- **Calcul de Progression** : Barre de progression dynamique et statistiques par étape

- **Auto-Next Logic** : Passage intelligent à la checklist suivante dès qu'une section est complétée.

- **UI/UX Aéronautique** : Design épuré utilisant Tailwind CSS, avec prise en charge des tooltips d'aide au pilotage.

- **Architecture Scalable** : Code structuré pour accueillir prochainement une synchronisation en temps réel avec X-Plane.

## 🛠 Tech Stack

- **Core** : React 18
- **Langage** : TypeScript
- **Style** : Tailwind CSS
- **Icones** : Lucide-React

## 🚀 Installation & Usage

1. **Installation**

```bash
git clone https://github.com/votre-nom/citation-x-checklist.git
npm install
```

2. **Lancement**

```bash
npm run dev
```

3. **Utilisation** : Cliquez sur les items pour les valider manuellement. La progression globale est mise à jour en haut de l'écran, et l'application vous guidera automatiquement vers la phase suivante.

## 🔧 Structure des Données

Le projet utilise un typage TypeScript pour garantir la fiabilité des données de checklist :

```ts
export interface Data {
  id: number;
  left: string;  // Action / System
  right: string; // Etat attendu
  subtitle?: string;
  isSub?: boolean; // Indentation pour les sous-items
  tooltip?: string;
}
```

## 🛤 Road Map

- [ ] **X-Plane DataRef Sync** : Connexion via WebSocket pour une auto-validation des systèmes (Batteries, Freins, Portes).
- [ ] **Audio Feedback** : Annonces vocales des étapes de la checklist.
- [ ] **Performance Data** : Calculateur de V-Speeds intégré.