# 📦 INSTALL.md – Setup Guide for DevFlow-AI

Welcome to **DevFlow-AI – AI-Powered Developer Workspace** 🚀
This guide walks you through **cloning**, **installing dependencies**, and **running the Airbnb Clone module locally** using **Vite**, **React (TypeScript)**, and **Tailwind CSS**.
Please ensure you follow the proper folder structure and commands to avoid bugs or broken references.

---

## ✅ Prerequisites

Before you begin, make sure you have the following installed:

| Tool          | Version | Download Link                                        |
| ------------- | ------- | ---------------------------------------------------- |
| Node.js       | ≥ 18.x  | [Download Node.js](https://nodejs.org/)              |
| Git           | ≥ 2.x   | [Download Git](https://git-scm.com/)                 |
| VS Code       | Latest  | [Download VS Code](https://code.visualstudio.com/)   |

---

## 🔁 Clone the Repository

```bash
git clone https://github.com/abhisek2004/DevFlow-AI.git
cd DevFlow-AI
```

---

## 📁 Project Structure Overview

Here's the current recommended folder structure:

```
DevFlow-AI/
│
├── .github/               → GitHub issue/PR templates
├── .project-docs/         → Project metadata (Changelog, Install, Learn, FAQ)
│
├── Airbnb_Clone/          → Primary Airbnb Clone frontend module
│   ├── public/            → Static assets (images, icons)
│   └── src/               → Application source files
│       ├── components/    → Custom UI components (Header, Footer, SearchBar, AuthModal)
│       ├── context/       → Application global state context (AppContext.tsx)
│       ├── data/          → Mock datasets (mockData.ts)
│       ├── pages/         → Page views (Home, PropertyDetail, Search, dashboards)
│       ├── types/         → TypeScript declarations (index.ts)
│       ├── App.tsx        → Main App router and layout wrapper
│       └── main.tsx       → DOM mounting and entry script
│
├── README.md              → General project dashboard overview
├── LICENSE                → Project license
├── CODE_OF_CONDUCT.md     → Code of conduct guidelines
├── CONTRIBUTING.md        → Contribution guidelines
├── SECURITY.md            → Security disclosure policies
```

---

## 📦 Install Dependencies

To install dependencies, navigate to the `Airbnb_Clone` subdirectory:

```bash
cd Airbnb_Clone
npm install
```

Make sure you are in the `Airbnb_Clone` folder where the `package.json` file exists.

---

## 🚀 Run the Project

Use Vite's dev server to run the project locally:

```bash
npm run dev
```

After the app starts, navigate to the local URL (usually):

```
http://localhost:5173/
```

---

## 💡 Useful NPM Scripts (in Airbnb_Clone)

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

---

## 🧪 Testing

Manual testing is done during development. Make sure pages are responsive and check your browser's console for any React warnings.

---

## 📥 Need Help?

Feel free to reach out:

- 💬 [GitHub Issues](https://github.com/abhisek2004/DevFlow-AI/issues)
- 🧑‍💻 Project Maintainer: Abhisek Panda
- 📧 Contact: [abhisek2004panda@gmail.com](mailto:abhisek2004panda@gmail.com)
