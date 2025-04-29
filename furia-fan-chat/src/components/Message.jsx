import React from 'react';

const Message = ({ sender, text }) => {
  return (
    <div style={{
      background: sender === 'FURIA' ? '#111' : '#eee',
      color: sender === 'FURIA' ? '#fff' : '#000',
      padding: '10px',
      borderRadius: '10px',
      margin: '5px 0',
      maxWidth: '70%',
      alignSelf: sender === 'Você' ? 'flex-end' : 'flex-start'
    }}>
      <strong>{sender}:</strong> {text}
    </div>
  );
};

export default Message;
