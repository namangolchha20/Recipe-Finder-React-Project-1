import { useState, useEffect } from 'react'
import './App.css'
import './index.css'

function App() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [expandedId, setExpandedId] = useState(null)
  const [favourites, setFavourites] = useState([])
  const [loading, setLoading] = useState(false)
  const [vegOnly, setVegOnly] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add('dark-mode')
    }else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  useEffect(() => {
    if(!query.trim()) {
      setRecipes([])
      return
    }
    const timer = setTimeout(() => {
      const fetchRecipes = async () => {
        setLoading(true)
        try {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
          )
          const data = await res.json()
          setRecipes(data.meals || [])
        }catch (error) {
          console.error("Fetch error:", error)
          setRecipes([])
        }finally {
          setLoading(false)
        }
      }
      fetchRecipes()
    }, 500)

    return () => clearTimeout(timer)
  }, [query])

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const toggleFavourite = (recipe) => {
    const exists = favourites.find((fav) => fav.idMeal === recipe.idMeal)
    if (exists) {
      setFavourites(favourites.filter((f) => f.idMeal !== recipe.idMeal))
    } else {
      setFavourites([...favourites, recipe])
    }
  }

  const clearFavourites = () => setFavourites([])

  const isVegetarian = (recipe) => {
    return recipe.strCategory === "Vegetarian"
  }

  return (
    <div className="app">
      <div className="main-content">
        <header className="app-header">
          <h1>Recipe Finder</h1>
          <div className="theme-toggle">
            <button
              className={`theme-btn ${!darkMode ? 'active' : ''}`}
              onClick={() => setDarkMode(false)}
            >
              ☀️
            </button>
            <button
              className={`theme-btn ${darkMode ? 'active' : ''}`}
              onClick={() => setDarkMode(true)}
            >
              🌙
            </button>
          </div>
        </header>

        <div className="search-container">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search for a dish... (type to search)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-bar">
          <label className="veg-toggle">
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={() => setVegOnly(!vegOnly)}
            />
            <span className="toggle-switch"></span>
            Vegetarian only
          </label>
          <div className="fav-badge">
            ❤️ Favourites <span>{favourites.length}</span>
          </div>
        </div>
        
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Fetching delicious recipes...</p>
          </div>
        )}

        {!loading && recipes.length === 0 && query.trim() !== '' && (
          <div className="empty-state">
            🍽️ No recipes found for "{query}". Try another search!
          </div>
        )}

        {!loading && recipes.length === 0 && query.trim() === '' && (
          <div className="empty-state">
            🥘 Start typing to search for recipes...
          </div>
        )}

        <div className="recipe-grid">
          {recipes
            .filter((recipe) => (vegOnly ? isVegetarian(recipe) : true))
            .map((recipe) => (
              <div key={recipe.idMeal} className="recipe-card">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="recipe-img"
                />
                <div className="recipe-content">
                  <h3 className="recipe-title">{recipe.strMeal}</h3>
                  <div className="recipe-meta">
                    <span>📋 {recipe.strCategory || 'Various'}</span>
                    <span>🌍 {recipe.strArea || 'International'}</span>
                  </div>
                  <div className="card-actions">
                    <button
                      className="btn btn-details"
                      onClick={() => toggleDetails(recipe.idMeal)}
                    >
                      {expandedId === recipe.idMeal ? 'Hide' : 'Show'} Details
                    </button>
                    <button
                      className={`btn btn-fav ${
                        favourites.some((f) => f.idMeal === recipe.idMeal)
                          ? 'active'
                          : ''
                      }`}
                      onClick={() => toggleFavourite(recipe)}
                    >
                      ❤️
                    </button>
                  </div>
                  {expandedId === recipe.idMeal && (
                    <div className="instructions">
                      {recipe.strInstructions || 'No instructions available.'}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      <aside className="favorites-sidebar">
        <div className="sidebar-header">
          <span>❤️ Your Favourites</span>
          {favourites.length > 0 && (
            <button className="clear-favs" onClick={clearFavourites}>
              Clear all
            </button>
          )}
        </div>
        <div className="fav-list">
          {favourites.length === 0 ? (
            <div className="empty-fav">
              <p>No favourites yet</p>
              <small>Click the heart on any recipe to save it here.</small>
            </div>
          ) : (
            favourites.map((fav) => (
              <div key={fav.idMeal} className="fav-item">
                <img src={fav.strMealThumb} alt={fav.strMeal} />
                <span>{fav.strMeal}</span>
                <button
                  className="remove-fav"
                  onClick={() => toggleFavourite(fav)}
                  title="Remove from favourites"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  )
}

export default App;