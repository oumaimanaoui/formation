import React, { useState } from 'react';
import './search.css'; // Importez votre fichier CSS

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowClearIcon(value.length > 0); // Afficher l'icône si le champ n'est pas vide
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setShowClearIcon(false);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <span className="search-icon">
          {/* Icône de loupe - Font Awesome est recommandé */}
          <i className="fas fa-search"></i> 
        </span>
        <input 
          type="text" 
          placeholder="Indiquez ce que vous cherchez" 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {showClearIcon && ( // Afficher l'icône de fermeture seulement si nécessaire
          <span className="close-icon" onClick={handleClearSearch}>
            <i className="fas fa-times"></i>
          </span>
        )}
      </div>

      <div className="trending-searches">
        <h2>Tendances les plus recherchées</h2>
        <ul>
          <li>Recherche tendance 1</li>
          <li>Recherche tendance 2</li>
          <li>Recherche tendance 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Search;