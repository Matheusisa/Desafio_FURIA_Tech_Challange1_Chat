import React from 'react';

const Home = ({ onEnter }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <img 
        src="/Furia_Esports_logo.png" 
        alt="Logo FURIA" 
        style={{ width: '120px', marginBottom: '20px' }} 
      />
      <h1>Bem-vindo ao FURIA Fan Chat! 🐆🔥</h1>
      <p>Conecte-se com outros fãs e acompanhe tudo sobre o time!</p>
      <button 
        onClick={onEnter}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          marginTop: '20px',
          cursor: 'pointer'
        }}
      >
        Entrar no Chat
      </button>
    </div>
  );
};

export default Home;

