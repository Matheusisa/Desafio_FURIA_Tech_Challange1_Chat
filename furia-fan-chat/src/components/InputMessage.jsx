import React, { useState } from 'react';

const InputMessage = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        display: 'flex', 
        gap: '10px',
        background: '#111',
        padding: '10px',
        borderRadius: '10px'
      }}
    >
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Digite sua mensagem..."
        style={{ 
          flex: 1, 
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #FFD700',
          backgroundColor: '#1a1a1a',
          color: '#fff'
        }}
      />
      <button 
        type="submit" 
        style={{
          background: 'linear-gradient(90deg, #FFD700, #FFC300)',
          color: '#000',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)'
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default InputMessage;
