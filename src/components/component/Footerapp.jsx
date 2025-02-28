import React from 'react';
import './Footerapp.css';

function Footerapp() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <span className="logo-text">UARE</span>
        </div>

        <div className="contact-info">
          <img src="/phone.png" alt="phone" className="phone-icon" />
          <span className="contact-text">Passez un appel</span>
          <a href="tel:+21655797979" className="phone-number">+216 55 797 979</a> | 
          <a href="tel:+21655848382" className="phone-number">+216 55 848 382</a> | 
          <span className="contact-text">Contactez-nous</span>
          <a href="mailto:nextedge@youbi.tn" className="email">nextedge@youbi.tn</a> | 
          <a href="#" className="social-link"><img src="/facebook.png" alt="Facebook" className="social-icon" /></a>
          <a href="#" className="social-link"><img src="/linkedin.png" alt="LinkedIn" className="social-icon" /></a>
          <a href="#" className="social-link"><img src="/instagram.png" alt="Instagram" className="social-icon" /></a>
          <span className="follow-text">Suivez-nous</span>
        </div>

        <hr className="footer-divider" />

        <div className="copyright">
          Copyright © {currentYear}, UARE, All Rights Reserved
        </div>

        <div className="powered-by">
          Powered by Creo
        </div>
      </div>
    </footer>
  );
}

export default Footerapp;