import React, { useState } from 'react';
import Message from './Message';
import InputMessage from './InputMessage';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'FURIA', text: 'Bem-vindo ao chat oficial da FURIA! 🔥' },
    { id: 2, sender: 'Fã', text: 'VAMOOOO FURIAAAAAAAA!' }
  ]);

  const handleSend = (msg) => {
    if (!msg.trim()) return;
    setMessages([...messages, { id: messages.length + 1, sender: 'Você', text: msg }]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Logo */}
      <div style={{ textAlign: 'center' }}>
        <img 
          src="/Furia_Esports_logo.png" 
          alt="Logo FURIA" 
          style={{ width: '80px', marginBottom: '10px' }} 
        />
        <h2>Chat da Torcida 🎮</h2>
      </div>

      {/* Caixa de mensagens */}
      <div style={{
        background: '#f5f5f5',
        borderRadius: '8px',
        padding: '10px',
        height: '300px',
        overflowY: 'auto',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }}>
        {messages.map(msg => (
          <Message key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {/* Campo de envio */}
      <InputMessage onSend={handleSend} />
    </div>
  );
};

export default ChatBox;