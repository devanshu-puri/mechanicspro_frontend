// src/context/FavoritesContext.jsx
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (garage) => {
    setFavorites((prev) =>
      prev.some((g) => g.id === garage.id)
        ? prev.filter((g) => g.id !== garage.id)
        : [...prev, garage]
    );
  };

  const isFavorite = (id) => favorites.some((g) => g.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
