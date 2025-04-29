import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import InputMessage from './InputMessage';
import { getLiveStatus } from '../services/liveStatus';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'FURIA', text: 'Bem-vindo ao chat oficial da FURIA! 🔥' },
    { id: 2, sender: 'Fã', text: 'VAMOOO FURIAAAA!' }
  ]);

  const getCrowdReaction = () => {
    const reactions = [
      "VAAAAAI FURIAAAAAA 🔥🔥🔥",
      "É TETRAAA! 🏆🏆🏆🏆",
      "DOMINA O MAPA! 🎮🐆",
      "UUUUUUHHHHHH 💥💥",
      "BORA FURIAAAA 🗣️🗣️"
    ];
    const random = Math.floor(Math.random() * reactions.length);
    return reactions[random];
  };
  
  const messagesEndRef = useRef(null);

  const handleSend = (msg) => {
    if (!msg.trim()) return;
    setMessages(prev => [...prev, { id: prev.length + 1, sender: 'Você', text: msg }]);
  };

  // Scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mock de status de partida
  useEffect(() => {
    const interval = setInterval(() => {
      const status = getLiveStatus();
      setMessages(prev => [
        ...prev,
        { id: prev.length + 1, sender: 'FURIA', text: status },
        { id: prev.length + 2, sender: 'Torcida', text: getCrowdReaction() }
      ]);
      
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      color: '#fff',
      padding: '30px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Topo com logo e título */}
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

      {/* Área de mensagens */}
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

      {/* Campo de envio */}
      <InputMessage onSend={handleSend} />

      {/* Imagem fixa no canto inferior direito */}
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

export default ChatBox;
