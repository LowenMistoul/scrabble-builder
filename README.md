# Scrabble Word Builder

A **Scrabble word solver** built with **React Native** that runs both in the browser and on mobile.  
It finds the **highest scoring valid words** that can be formed using a player's rack and optionally building on a word already on the board.

---

## Features

- Input a **rack** (1–7 letters) and optionally a **board word**.
- Returns **highest scoring valid words**, limited to **top 10 results**.
- Validates inputs and ensures **tile distribution rules** are respected (rack + board letters cannot exceed available tiles).
- Shows **loading spinner** during computation (async simulation).
- Clear button to reset inputs and results.
- Fully tested with **unit tests** covering dictionary loading, letter counting, validation, scoring, and solver logic.

---

## Demo

| Input | Rack | Board Word | Top Result |
|-------|------|------------|------------|
| Example 1 | `AIDOORW` | `WIZ` | `WIZARD` |
| Example 2 | `AIDOORW` | (none) | `DRAW` |
| Example 3 | `AIDOORZ` | `QUIZ` | Invalid input (too many Z tiles) |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- Expo CLI (`npm install -g expo-cli`) if running on mobile

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run in web
```bash
npm start
# or
yarn start
```

Expo will open a browser window with a QR code for mobile preview or a web preview.

### Run on Mobile
	1.	Install Expo Go on your Android/iOS device.
	2.	Scan the QR code displayed after npm start.
	3.	The app will load with your inputs and solver ready.


### Testing
```bash
npm test
```