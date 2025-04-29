import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import InputMessage from './InputMessage';
import { getLiveStatus } from '../services/liveStatus';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'FURIA', text: 'Bem-vindo ao chat oficial da FURIA! 🔥' },
    { id: 2, sender: 'Fã', text: 'VAMOOO FURIAAAA!' }
  ]);

  const messagesEndRef = useRef(null);

  const handleSend = (msg) => {
    if (!msg.trim()) return;
    setMessages([...messages, { id: messages.length + 1, sender: 'Você', text: msg }]);
  };

  // Scroll automático sempre que uma nova mensagem for adicionada
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      const status = getLiveStatus();
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'FURIA',
        text: status
      }]);
    }, 8000); // A cada 8 segundos
  
    return () => clearInterval(interval); // limpa ao sair
  }, []);
  
  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      color: '#fff',
      padding: '30px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src="/Furia_Esports_logo.png" 
          alt="Logo FURIA" 
          style={{ width: '80px', marginBottom: '10px' }} 
        />
        <h2 style={{
          color: '#FFD700',
          textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
        }}>Chat da Torcida 🎮</h2>
      </div>

      <div style={{
        background: '#1a1a1a',
        borderRadius: '10px',
        padding: '15px',
        height: '300px',
        overflowY: 'auto',
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        boxShadow: '0 0 8px rgba(255, 215, 0, 0.15)'
      }}>
        {messages.map(msg => (
          <Message key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <InputMessage onSend={handleSend} />
    </div>
  );
};

export default ChatBox;
