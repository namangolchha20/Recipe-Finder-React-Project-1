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
```
---
## 🌐 API Used

This project uses the **TheMealDB** free public API.
**Endpoint:** https://www.themealdb.com/api/json/v1/1/search.php?s={query}

---

## 🧠 Key React Concepts Practiced
- useState for UI and data state
- useEffect for:
    - Debounced API fetching
    - DOM side effects (dark mode)
- Conditional rendering
- Array methods (map, filter, find)
- Immutable state updates
- Interactive UI (toggle details, favorites)

---

## 🚀 Future Improvements
- 🔎 Ingredient-based search
- 💾 Persist favorites using localStorage
- 📄 Pagination / infinite scroll
- 🎬 Animations (Framer Motion)
- 🧩 Custom hooks for API logic
- 📱 Improved mobile responsiveness

---

## 🙌 Acknowledgements
- [TheMealDB](https://www.themealdb.com) for providing the free recipe API
- React & Vite ecosystem

---

## 📜 License
This project is open-source and available under the MIT License.

---

## ⭐ Support
If you like this project:
- ⭐ Star the repo
- 🍴 Fork it
- 🧠 Explore and improve it

---

<p align="center">
  Made with ❤️ using React
</p>
