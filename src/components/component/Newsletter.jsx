import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function Newsletter() {
  return (
    <div style={styles.newsletter}>
      <div style={styles.content}>
        <h2 style={styles.title}>Newsletter - Stay tune and get the latest update</h2>
        <p style={styles.description}>Far far away, behind the word mountains</p>
      </div>
      <div style={styles.form}>
        <input
          type="email"
          placeholder="Enter email address"
          style={styles.input}
        />
        <button style={styles.button}>
          <FaPaperPlane style={styles.icon} />
        </button>
      </div>
    </div>
  );
}

const styles = {
  newsletter: {
    backgroundColor: '#20c997', // Teal background color
    padding: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    color: '#fff',
    flex: '1',
    paddingRight: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '14px',
    opacity: '0.8',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    justifyContent: 'flex-end',
  },
  input: {
    padding: '12px 15px',
    border: 'none',
    borderRadius: '4px 0 0 4px',
    width: '300px',
    fontSize: '16px',
    outline: 'none',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    paddingRight: '30px', // Ajout de padding pour l'icône
    position: 'relative', // Nécessaire pour positionner l'icône
  },
  button: {
    backgroundColor: '#fff',
    border: 'none',
    padding: '12px 5px',
    borderRadius: ' 4px 4px ',
    cursor: 'pointer',
    marginLeft: '-1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
  },
  buttonHover: {
    backgroundColor: '#e6e6e6',
  },
  icon: {
    fontSize: '10px',
    color: '#66c2b3',
    position: 'absolute', // Positionnement absolu
    right: '10px', // Positionnement à droite
    top: '50%', // Centrage vertical
    transform: 'translateY(-50%)', // Ajustement du centrage
  },
};

export default Newsletter;

