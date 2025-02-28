import React from 'react';
import './HeroContent.css'; // Importez le fichier CSS

function HeroContent() {
  return (
    <div className="hero-section">
      <div className="content">
        <h1>MEILLEURS COURS EN LIGNE</h1>
        <p>Informez-vous en ligne depuis chez vous</p>
        <div className="carousel">
          <button className="carousel-button">&lt;</button>
          <p className="carousel-text">
            Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.
          </p>
          <button className="carousel-button">&gt;</button>
        </div>
        <div className="buttons">
          <button className="learn-more">En savoir plus</button>
          <button className="join-us">Rejoignez-nous maintenant</button>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;