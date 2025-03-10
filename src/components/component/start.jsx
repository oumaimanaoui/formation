import React, { useState } from 'react';
import './Start.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Start() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [grade, setGrade] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      firstName,
      lastName,
      phone,
      birthdate,
      password,
      confirmPassword,
      governorate,
      grade,
    });

    // Navigate to the home page after successful submission
    navigate('/DrawerContent'); // Replace '/home' with your actual home page route
  };

  return (
    <div className="signup-container">
      <div className="image-container">
        <img src='/images.jpg' alt="Signup" className="signup-image" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <h2>Créer un compte</h2>
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date de naissance"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            placeholder="Mot de passe (minimum 8 caractères)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-row">
          <select
            value={governorate}
            onChange={(e) => setGovernorate(e.target.value)}
          >
            <option value="">Choisissez votre gouvernorat</option>
            <option value="Tunis">Tunis</option>
            <option value="Ariana">Ariana</option>
            <option value="Ben Arous">Ben Arous</option>
            <option value="Manouba">Manouba</option>
            <option value="Nabeul">Nabeul</option>
            <option value="Zaghouan">Zaghouan</option>
            <option value="Bizerte">Bizerte</option>
            <option value="Béja">Béja</option>
            <option value="Jendouba">Jendouba</option>
            <option value="Kef">Kef</option>
            <option value="Siliana">Siliana</option>
            <option value="Sousse">Sousse</option>
            <option value="Monastir">Monastir</option>
            <option value="Mahdia">Mahdia</option>
            <option value="Sfax">Sfax</option>
            <option value="Kairouan">Kairouan</option>
            <option value="Kasserine">Kasserine</option>
            <option value="Sidi Bouzid">Sidi Bouzid</option>
            <option value="Gabès">Gabès</option>
            <option value="Medenine">Medenine</option>
            <option value="Tataouine">Tataouine</option>
            <option value="Kebili">Kebili</option>
            <option value="Tozeur">Tozeur</option>
          </select>
          <select value={grade} onChange={(e) => setGrade(e.target.value)}>
            <option value="">Choisissez votre classe</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
}

export default Start;