import React, { useState } from 'react';
import Message from './Message';
import InputMessage from './InputMessage';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'FURIA', text: 'Bem-vindo ao chat oficial da FURIA! 🔥' },
    { id: 2, sender: 'Fã', text: 'VAMOOOO FURIAAAAAAAA!' }
  ]);

  const handleSend = (msg) => {
    setMessages([...messages, { id: messages.length + 1, sender: 'Você', text: msg }]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chat da Torcida 🎮</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map(msg => (
          <Message key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <InputMessage onSend={handleSend} />
    </div>
  );
};

export default ChatBox;
