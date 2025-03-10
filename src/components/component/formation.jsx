import React from "react";
import "./formation.css";
import { Link } from "react-router-dom";

function Formation() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">skool</div>
        <div className="header-actions">
          <span>Formations</span>
          <button className="create-community-btn">
            Discover communities or create your own
          </button>
        </div>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Q Search for anything" />
      </div>
      <div className="community-grid">
        {/* Formations HTML, CSS, JavaScript, Figma, PHP */}
        <div className="community-card">
          <div className="community-image">
            <img src="/html.png" alt="Formation HTML pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation HTML pour débutants</h3>
            <p>Apprenez les bases du langage HTML et créez vos premières pages web.</p>
            <Link to="/formation/html">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        <div className="community-card">
          <div className="community-image">
            <img src="/css.png" alt="Formation CSS pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation CSS pour débutants</h3>
            <p>Maîtrisez les concepts du CSS et stylisez vos pages web avec élégance.</p>
            <Link to="/formation/css">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        <div className="community-card">
          <div className="community-image">
            <img src="/java.jpg" alt="Formation JavaScript pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation JavaScript pour débutants</h3>
            <p>Initiez-vous au JavaScript et rendez vos pages web interactives.</p>
            <Link to="/formation/javascript">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        <div className="community-card">
          <div className="community-image">
            <img src="/figma.png" alt="Formation Figma pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation Figma pour débutants</h3>
            <p>Découvrez Figma et concevez des interfaces utilisateur professionnelles.</p>
            <Link to="/formation/figma">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        <div className="community-card">
          <div className="community-image">
            <img src="/php.jpg" alt="Formation PHP pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation PHP pour débutants</h3>
            <p>Apprenez les bases du langage PHP et créez des sites web dynamiques.</p>
            <Link to="/formation/php">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        {/* Formations Python, React, SQL */}
        <div className="community-card">
          <div className="community-image">
            <img src="/python.png" alt="Formation Python pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation Python pour débutants</h3>
            <p>Découvrez Python, un langage polyvalent pour le développement web et l'analyse de données.</p>
            <Link to="/formation/python">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        <div className="community-card">
          <div className="community-image">
            <img src="/progc.png" alt="Formation React pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation React pour débutants</h3>
            <p>Apprenez à construire des interfaces utilisateur dynamiques avec la bibliothèque React.</p>
            <Link to="/formation/react">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        <div className="community-card">
          <div className="community-image">
            <img src="/sql.png" alt="Formation SQL pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation SQL pour débutants</h3>
            <p>Maîtrisez les bases de SQL pour gérer et interroger des bases de données relationnelles.</p>
            <Link to="/formation/sql">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        {/* Nouvelles formations Git, Node.js, Angular, Vue.js */}
        <div className="community-card">
          <div className="community-image">
            <img src="/git.png" alt="Formation Git pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation Git pour débutants</h3>
            <p>Apprenez les bases de Git pour la gestion de versions de vos projets.</p>
            <Link to="/formation/git">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        <div className="community-card">
          <div className="community-image">
            <img src="/calgo.png" alt="Formation Node.js pour débutants" />
          </div>
          <div className="community-details">
            <h3>Formation c pour débutants</h3>
            <p>Découvrez c et apprenez à développer des applications côté serveur en JavaScript.</p>
            <Link to="/formation/nodejs">
              <button>Voir la formation</button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Formation;