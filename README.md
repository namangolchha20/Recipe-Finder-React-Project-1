# 🍲 Recipe Finder

A modern React recipe search app that lets users explore meals, view details, and save favorites with a clean UI and dark mode support.

---

## ✨ Features

- 🔎 **Live Recipe Search** – Search recipes by dish name with instant results (debounced API calls, no search button).
- 📋 **Recipe Cards** – Each card shows image, title, category, region, and has expandable instructions.
- ❤️ **Favorites System** – Add/remove recipes to favorites; sidebar with quick access and “clear all” option.
- 🥗 **Vegetarian Filter** – Toggle to show only vegetarian recipes.
- 🌙 **Dark Mode** – Toggle light/dark theme; persists via `useEffect` applying global body styles.
- ⚡ **Smart UI States** – Loading spinner, empty state, and search prompt.

---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS
- [TheMealDB API](https://www.themealdb.com)

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/recipe-finder.git

# Navigate to project
cd recipe-finder

# Install dependencies
npm install

# Start development server
npm run dev
