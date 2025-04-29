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
          border: '1px solid #444',
          backgroundColor: '#222',
          color: '#fff'
        }}
      />
      <button 
        type="submit" 
        style={{
          backgroundColor: '#f00',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default InputMessage;
