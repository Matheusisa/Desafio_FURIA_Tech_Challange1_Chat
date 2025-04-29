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
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Logo da FURIA */}
      <img 
        src="/Furia_Esports_logo.png" 
        alt="Logo FURIA" 
        style={{ width: '120px', marginBottom: '20px' }} 
      />

      {/* Título e descrição */}
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

      {/* Botão de entrar no chat */}
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

      {/* Imagem "Future is Black" no canto inferior direito */}
      <img 
        src="/Futere_is_black.png" 
        alt="Future is Black" 
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          width: '120px',
          opacity: 0.9,
          zIndex: 10
        }}
      />
    </div>
  );
};

export default Home;
