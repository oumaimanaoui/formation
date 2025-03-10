import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './student.css';

function Professeur() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [registrationData, setRegistrationData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        title: '', // Titre/fonction
        teachingLevel: '', // Niveau enseigné
        coursesTaught: '', // Cours enseignés
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegistrationChange = (e) => {
        setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email: loginData.email,
                password: loginData.password,
            });
            localStorage.setItem('token', response.data.access_token);

            const userResponse = await axios.get('http://localhost:3000/users/me', {
                headers: {
                    Authorization: `Bearer ${response.data.access_token}`,
                },
            });

            if (userResponse.data) {
                navigate('/');
            } else {
                setErrorMessage("L'utilisateur n'existe pas dans MongoDB");
            }
        } catch (error) {
            setErrorMessage('Erreur de connexion. Veuillez vérifier vos identifiants.');
        }
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (registrationData.password !== registrationData.confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            await axios.post('http://localhost:3003/auth/register', registrationData);
            setErrorMessage('Compte créé avec succès !');
            setIsRegistering(false);
            setLoginData({ email: registrationData.email, password: registrationData.password });
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage('Erreur d\'inscription.');
            }
        }
    };

    const toggleRegistering = () => {
        setIsRegistering(!isRegistering);
        setErrorMessage('');
    };

    return (
        <div className="auth-container">
            {isRegistering ? (
                <div className="signup-form">
                    <h2>Créer un compte Professeur</h2>
                    <form onSubmit={handleRegistrationSubmit}>
                        <input type="text" name="firstName" placeholder="Prénom *" value={registrationData.firstName} onChange={handleRegistrationChange} required />
                        <input type="text" name="lastName" placeholder="Nom *" value={registrationData.lastName} onChange={handleRegistrationChange} required />
                        <input type="email" name="email" placeholder="Email *" value={registrationData.email} onChange={handleRegistrationChange} required />
                        <input type="password" name="password" placeholder="Mot de passe *" value={registrationData.password} onChange={handleRegistrationChange} required minLength="8" />
                        <input type="password" name="confirmPassword" placeholder="Confirmez le mot de passe *" value={registrationData.confirmPassword} onChange={handleRegistrationChange} required minLength="8" />
                        <input type="text" name="title" placeholder="Titre/Fonction *" value={registrationData.title} onChange={handleRegistrationChange} required />
                        <select name="teachingLevel" value={registrationData.teachingLevel} onChange={handleRegistrationChange} required>
                            <option value="">Niveau(x) enseigné(s)</option>
                            <option value="Primaire">Primaire</option>
                            <option value="Collège">Collège</option>
                            <option value="Lycée">Lycée</option>
                            <option value="Université">Université</option>
                        </select>
                        <input type="text" name="coursesTaught" placeholder="Cours enseignés *" value={registrationData.coursesTaught} onChange={handleRegistrationChange} required />
                        <button type="submit">Créer un compte</button>
                    </form>
                    <p>Déjà un compte ? <a href="#" onClick={toggleRegistering}>Se connecter</a></p>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            ) : (
                <div className="login-form">
                    <div className="avatar">
                        <img src="utilisateur.png" alt="Avatar" />
                    </div>
                    <h2>Connexion</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <input type="email" placeholder="Email" name="email" value={loginData.email} onChange={handleLoginChange} />
                        <input type="password" placeholder="Mot de passe" name="password" value={loginData.password} onChange={handleLoginChange} />
                        <button type="submit">Se connecter</button>
                    </form>
                    <p>Pas de compte? <a href="#" onClick={toggleRegistering}>S'inscrire</a></p>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            )}
        </div>
    );
}

export default Professeur;