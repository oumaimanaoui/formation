import React, { useState } from 'react';
import './student.css'; // Importez le fichier CSS

function student() {
    const [isLogin, setIsLogin] = useState(true); // État pour gérer l'affichage du formulaire
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        birthDate: '',
        email: '', // Ajout de l'email pour l'inscription
        password: '',
        confirmPassword: '',
        governorate: '',
        grade: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Ici, vous pouvez gérer la logique d'inscription ou de connexion
        console.log(formData); // Affiche les données du formulaire
    };

    const handleLoginClick = () => {
        setIsLogin(true); // Afficher l'interface de connexion
    };

    const handleSignUpClick = () => {
        setIsLogin(false); // Afficher l'interface d'inscription
    };

    return (
        <div className="container"> {/* Ajout d'un conteneur principal */}
            {isLogin ? (
                <div className="login-container">
                    <h2>Se connecter</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Numéro de téléphone ou email *</label>
                            <input
                                type="text"
                                id="email"
                                name="email" // Ajout du name pour le formulaire de connexion
                                value={formData.email} // Utilisation de formData pour l'email
                                onChange={handleChange} // Utilisation de handleChange
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Mot de passe *</label>
                            <input
                                type="password"
                                id="password"
                                name="password" // Ajout du name pour le formulaire de connexion
                                value={formData.password} // Utilisation de formData pour le mot de passe
                                onChange={handleChange} // Utilisation de handleChange
                                required
                            />
                        </div>
                        <a href="#" className="forgot-password">Mot de passe oublié ?</a>
                        <button type="submit" className="login-button">Se connecter</button>
                    </form>
                    <p className="create-account">
                        Vous n'avez pas de compte? <a href="#" onClick={handleSignUpClick}>Créez un nouveau compte</a>
                    </p>
                </div>
            ) : (
                <div className="signup-container">
                    <h2>Créer un compte</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="firstName">Prénom *</label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName">Nom *</label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Numéro de téléphone *</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="birthDate">Date de naissance *</label>
                            <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Mot de passe *</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required minLength="8" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirmez le mot de passe *</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required minLength="8" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="governorate">Choisissez votre gouvernorat *</label>
                            <select id="governorate" name="governorate" value={formData.governorate} onChange={handleChange} required>
                                <option value="">Sélectionnez un gouvernorat</option>
                                <option value="Tunis">Tunis</option>
                                <option value="Ariana">Ariana</option>
                                {/* Ajoutez d'autres gouvernorats ici */}
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="grade">Choisissez votre classe *</label>
                            <select id="grade" name="grade" value={formData.grade} onChange={handleChange} required>
                                <option value="">Sélectionnez une classe</option>
                                <option value="1ère année">1ère année</option>
                                <option value="2ème année">2ème année</option>
                                {/* Ajoutez d'autres classes ici */}
                            </select>
                        </div>
                        <button type="submit">Créer un compte</button>
                    </form>
                    <p>
                        Déjà un compte ? <a href="#" onClick={handleLoginClick}>Se connecter</a>
                    </p>
                </div>
            )}
        </div>
    );
}

export default student;
