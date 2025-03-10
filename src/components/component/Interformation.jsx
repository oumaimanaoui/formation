import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link
import './Interformation.css'; // Créez ce fichier CSS

function Interformation() {
  return (
    <div className="interface">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo Interface Formation" />
          <span>Formation</span>
        </div>
        <nav className="nav">
        <div className="navigation">
          <a href="#">InfoBase</a>
          <a href="#">Programmation</a>
          <a href="#">Sécurité</a>
          <a href="#">Contact</a>
       
         </div>
        </nav>
      </header>
      <main className="main-content">
        <section className="intro">
          <p>Découvrez nos formations en informatique pour débutants !</p>
        </section>
        <section className="formations">
          <div className="formation-card">
            <img src="/image9.png" alt="Initiation à l'informatique" />
            <h3>Initiation à l'informatique</h3>
            <p>Découvrez les bases de l'informatique et des systèmes d'exploitation.</p>
            <Link to="/initiation">
              <button className="learn-more-button">En savoir plus</button>
            </Link>
          </div>
          <div className="formation-card">
            <img src="/images0.jpg" alt="Outils bureautiques" />
            <h3>Outils bureautiques</h3>
            <p>Maîtrisez Word, Excel et PowerPoint pour une productivité accrue.</p>
            <Link to="/bureautique">
              <button className="learn-more-button">En savoir plus</button>
            </Link>
          </div>
          <div className="formation-card">
            <img src="/image11.png" alt="Programmation Web" />
            <h3>Programmation Web</h3>
            <p>Apprenez les bases de HTML, CSS et JavaScript pour créer des sites web.</p>
            <Link to="/programmation">
              <button className="learn-more-button">En savoir plus</button>
            </Link>
          </div>
          <div className="formation-card">
            <img src="/images3.jpg" alt="Cybersécurité" />
            <h3>Cybersécurité</h3>
            <p>Protégez vos données et apprenez les bonnes pratiques en matière de sécurité informatique.</p>
            <Link to="/cybersecurite">
              <button className="learn-more-button">En savoir plus</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Interformation;
