import React, { useState } from 'react';
import Home from './pages/Home';
import ChatBox from './components/ChatBox';

function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div>
      {screen === 'home' ? <Home onEnter={() => setScreen('chat')} /> : <ChatBox />}
    </div>
  );
}

export default App;
