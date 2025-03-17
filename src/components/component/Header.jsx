import React, { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faBars, faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
 import { Link } from 'react-router-dom';
 import './Header.css'; // Importez le fichier CSS
 
 function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
 
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
 
   const toggleSearch = () => {
     setIsSearchOpen(!isSearchOpen);
   };
 
   return (
     
     <header className="header">
       <div className="top-bar">
         <div className="container">
           <div className="menu">
             <span onClick={toggleMenu} className="menu-icon">
               <FontAwesomeIcon icon={faBars} />
               <span>menu</span>
             </span>
           </div>
           <div className="logo">
             <img src="/logo.png" alt="Image de succès" />
           </div>
           <div className="user-actions">
             <div className="connect">
               <Link to="/connecter">
                 <FontAwesomeIcon icon={faUser} />
                 <span>Seconnecter</span>
               </Link>
             </div>
             <div className="search">
               <span onClick={toggleSearch} className="search-icon">
                 <FontAwesomeIcon icon={faSearch} />
                 <span>recherche</span>
               </span>
               {isSearchOpen && (
                 <input type="text" placeholder="Rechercher..." className="search-input" />
               )}
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
 
       {isMenuOpen && (
         <div className="drawer">
           <div className="drawer-header">
             <span className="menu-text">Menu</span>
             <span className="logo-text">MYDEV</span>
             <button className="close-button" onClick={toggleMenu}>Fermer</button>
           </div>
           <nav>
             <ul>
               <li><Link to="/accueil">accueil</Link></li> {/* Lien vers la page d'accueil */}
               <li><Link to="/formations">formations</Link></li> {/* Lien vers la page des cours */}
               <li><Link to="/cours">cours</Link></li> {/* Lien vers la page de formation */}
               {/* Ajoutez d'autres éléments de menu ici */}
             </ul>
           </nav>
         </div>
       )}
 
       {isSearchOpen && ( // Affichage du drawer de recherche si isSearchOpen est vrai
         <div className="search-drawer">
           <div className="search-drawer-header">
             <input type="text" placeholder="Rechercher..." className="search-input" />
             <button className="close-button" onClick={toggleSearch}>Fermer</button>
           </div>
           {/* Ajoutez ici le contenu du drawer de recherche si nécessaire */}
         </div>
       )}
     </header>
   );
 }
 
 export default Header;