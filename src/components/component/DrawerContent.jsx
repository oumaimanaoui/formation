import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './page.css';
import HeroContent from './HeroContent';
{/*import Categories from './categories';*/}
import PopularCourses from './PopularCourses';
import Footerapp from './Footerapp';
import { Link } from 'react-router-dom';

function DrawerContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickBouton1 = () => {
    console.log("Bouton 1 cliqué !");
  };
  
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="menu">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
              <span>menu</span>
            </button>
          </div>
          <div className="logo">
            <img src="/logo.png" alt="Image de succès" />
          </div>
          <div className="user-actions">
            <div className="connect">
              <Link to="/connecter">
                <FontAwesomeIcon icon={faUser} />
                <span>Se connecter</span>
              </Link>
            </div>
            <div className="login">
              <Link to="/search">
                <FontAwesomeIcon icon={faSearch} />
                <span>recherche</span>
              </Link>
            </div>
            <div className="cart">
              <Link to="/monpanier">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>mon panier</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menu déroulant */}
      {isMenuOpen && (
        <div className="drawer">
          <div className="drawer-header">
            <span className="menu-text">Menu</span>
            <span className="logo-text">MYDEV</span>
            <button className="close-button" onClick={toggleMenu}>Fermer</button>
          </div>
          <nav> 
            
            <ul>
            <li><Link to="/">accueil</Link></li>
              <li><Link to="/">cours</Link></li>
              <li><Link to="/">formation</Link></li>
              {/* Ajoutez d'autres éléments de menu ici */}
            </ul>
          </nav>
        </div>
      )}
      <div> <HeroContent/></div>
     {/* <div> <Categories/></div>*/}
     <div><PopularCourses/></div>
      <div><Footerapp/> </div> 
     
    </header>
  );
}

export default DrawerContent;