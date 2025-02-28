import React from 'react';
import './connecter.css';

function connecter() {
  const handleStudentClick = () => {
    window.open('/student', '_blank'); // Opens in a new tab
  };

  const handleTeacherClick = () => {
    window.open('/professeur', '_blank'); // Opens in a new tab
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <div className="login-image">
            <img src="images2.jpg" alt="Logo" />
          </div>
          <div className="login-form">
            <h2>تسجيل الدخول</h2>
            <p>تهنى على قرايتك</p>

            <div className="user-types">
              <div className="user-type">
                
                <button onClick={handleStudentClick}>student</button>
                <img src="eleve.png" alt="Student Icon" />
              </div>
              <div className="user-type">
                
                <button onClick={handleTeacherClick}>professeur</button>
                <img src="proffeseur.png" alt="professeur Icon" />
                <button className="return-button">الرجوع إلى الصفحة الرئيسية</button>
              </div>
            </div>
          </div>
          <div>
          <button className="return-button">الرجوع إلى الصفحة الرئيسية</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connecter;