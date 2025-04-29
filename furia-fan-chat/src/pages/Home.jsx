import React from 'react';

const Home = ({ onEnter }) => {
  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <img 
        src="/Furia_Esports_logo.png" 
        alt="Logo FURIA" 
        style={{ width: '120px', marginBottom: '20px' }} 
      />

      <h1 style={{
        color: '#FFD700',
        textShadow: '0 0 10px rgba(255, 215, 0, 0.6)',
        fontSize: '2rem',
        marginBottom: '10px'
      }}>
        Bem-vindo ao FURIA Fan Chat!
      </h1>

      <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '30px' }}>
        Conecte-se com a torcida, acompanhe os jogos e vibre junto com o time! 🐆🔥
      </p>

      <button 
        onClick={onEnter}
        style={{
          background: 'linear-gradient(90deg, #FFD700, #FFC300)',
          color: '#000',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 0 12px rgba(255, 215, 0, 0.5)'
        }}
      >
        Entrar no Chat
      </button>
    </div>
  );
};

export default Home;