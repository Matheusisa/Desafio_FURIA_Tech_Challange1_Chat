import React from 'react';

const Message = ({ sender, text }) => {
  const isFuria = sender === 'FURIA';
  const isUser = sender === 'Você';

  const backgroundColor = isFuria ? '#FFD700' : isUser ? '#333' : '#222';
  const textColor = isFuria ? '#000' : '#fff';
  const alignSelf = isUser ? 'flex-end' : 'flex-start';

  return (
    <div style={{
      background: backgroundColor,
      color: textColor,
      padding: '10px 15px',
      borderRadius: '12px',
      margin: '5px 0',
      maxWidth: '70%',
      alignSelf: alignSelf,
      fontWeight: isFuria ? 'bold' : 'normal',
      boxShadow: isFuria ? '0 0 8px rgba(255, 215, 0, 0.6)' : '0 0 4px rgba(0,0,0,0.3)'
    }}>
      <strong>{sender}:</strong> {text}
    </div>
  );
};

export default Message;
