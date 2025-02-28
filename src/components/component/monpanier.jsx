import React from 'react';
import './PanierVide.css'; // Assurez-vous d'importer le fichier CSS

function monpanier() {
  return (
    <div className="panier-vide-container">
      <div className="panier-vide-contenu">
        <div className="icon">
          <svg 
            width="50" 
            height="50" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Vous pouvez remplacer ceci par votre propre icône SVG ou utiliser une bibliothèque d'icônes comme Font Awesome */}
            <path d="M3 6H5H19V18H5.022A1.503 1.503 0 0 1 3.5 16.5V6Z" fill="#000"/>
            
            <path d="M9 9.5C9 10.3284 8.32843 11 7.5 11C6.67157 11 6 10.3284 6 9.5C6 8.67157 6.67157 8 7.5 8C8.32843 8 9 8.67157 9 9.5Z" fill="#000"/>
            <path d="M16.5 9.5C16.5 10.3284 15.8284 11 15 11C14.1716 11 13.5 10.3284 13.5 9.5C13.5 8.67157 14.1716 8 15 8C15.8284 8 16.5 8.67157 16.5 9.5Z" fill="#000"/>
          </svg>
        </div>
        <h1>Votre panier d'achat est vide</h1>
        <p>
          Vérifiez si vos favoris se trouvent bien dans votre panier ou ajoutez
          des articles de la nouvelle collection.
        </p>
        <button>Voir la nouvelle collection</button>
      </div>
    </div>
  );
}

export default monpanier;