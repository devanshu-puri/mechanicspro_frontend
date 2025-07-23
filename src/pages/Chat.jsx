import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'; // Make sure you have Header.jsx

const garages = [
  { id: 1, name: 'ABC Garage', lastMsg: 'Available for booking...', time: '1 min', img: 'https://via.placeholder.com/50' },
  { id: 2, name: 'XYZ Garage', lastMsg: 'Quick oil change here', time: '10 min', img: 'https://via.placeholder.com/50' },
  { id: 3, name: 'QuickFix Garage', lastMsg: 'Service slot open tomorrow', time: '15 min', img: 'https://via.placeholder.com/50' },
];

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: 'garage', text: 'Welcome to ABC Garage!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);

    if (input.toLowerCase() === 'hi' || input.toLowerCase() === 'hello') {
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'garage', text: 'Hello, how can I assist you?' }]);
      }, 500);
    }

    setInput('');
  };

  const customOrange = '#f36d1d';

  return (
    <>
    <Header />
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '280px', backgroundColor: customOrange, color: 'white' }} className="p-3">
        <h5 className="mb-4">Garages</h5>
        {garages.map((g) => (
          <div key={g.id} className="d-flex align-items-center mb-3">
            <img src={g.img} alt={g.name} className="rounded-circle me-2" width="40" height="40" />
            <div>
              <strong>{g.name}</strong><br />
              <small>{g.lastMsg}</small>
            </div>
            <span className="ms-auto small">{g.time}</span>
          </div>
        ))}
        <div className="text-center mt-auto pt-5">
          <h4><b>garage</b>Chat</h4>
          
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-grow-1 d-flex flex-column justify-content-between p-3 bg-light">
        <div className="border-bottom pb-2 mb-2">
          <h5 className="mb-0">ABC Garage</h5>
        </div>

        {/* Messages */}
        <div className="flex-grow-1 overflow-auto mb-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-2 ${msg.from === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
            >
              <div
                className="p-2 rounded"
                style={{
                  backgroundColor: msg.from === 'user' ? customOrange : '#ffffff',
                  color: msg.from === 'user' ? 'white' : 'black',
                  border: msg.from !== 'user' ? '1px solid #ddd' : 'none'
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            className="btn text-white"
            style={{ backgroundColor: customOrange }}
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Chat;
