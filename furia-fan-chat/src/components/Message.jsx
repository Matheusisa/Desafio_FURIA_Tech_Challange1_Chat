import React from 'react';

const Message = ({ sender, text }) => {
  const isFuria = sender === 'FURIA';
  const isUser = sender === 'Você';

  const backgroundColor = isFuria ? '#111' : isUser ? '#333' : '#222';
  const textColor = isFuria ? '#fff' : '#ddd';
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
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
    }}>
      <strong>{sender}:</strong> {text}
    </div>
  );
};

export default Message;
