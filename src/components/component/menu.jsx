import React from 'react';
import './menu.css';


 

 // Petit composant pour afficher une tâche
function menu(props) {
    return (
        isMenuOpen && (
            <div className="container">
              <div className="navbar">
              <div className="navbar-left">
                <button>Menu</button>
                </div>
                <span className="navbar-center">UARE</span>
                <div className="navbar-right">
                <button  onClick={toggleMenu}>Fermer</button>
                </div>
              </div>
              <section className="section">
                <ul>
                  <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/magasins">Magasins</Link></li>
                  
                </ul>
              </section>
            </div>
          )
    );
  }
  
  // Grand composant pour afficher la liste des tâches


export default menu;