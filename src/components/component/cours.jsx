import React from 'react';
import './Cours.css'; // Créez ce fichier CSS
import { Link } from 'react-router-dom'; // Importez Link

function Cours() {
  return (
    <div className="interface-container">
      <div className="header">
        <div className="navigation">
          <a href="#">Info base</a>
          <a href="#">Programmation</a>
          <a href="#">Sécurité</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="content">
        <div className="text-content">
          <h2>Info Débutants</h2>
        </div>

        <div className="image-with-button">
          <img src="/img.jpg" alt="Description de l'image" className="content-image" />
          <Link to="/interformation" target="_blank" className="formation-button">
            DÉCOUVRIR LES FORMATIONS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cours;