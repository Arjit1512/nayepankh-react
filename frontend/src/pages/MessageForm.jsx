import React, { useState, useEffect } from 'react';
import './MessageForm.css';

const MessageForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  // Save messages to localStorage whenever the messages state changes
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() !== '' && message.trim() !== '') {
      const newMessage = { name, message };
      setMessages([...messages, newMessage]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className='entire-msg'>
    <h1 className='thrill'>We're thrilled to hear your experience!</h1>
    <div className="message-form-container">
    <form onSubmit={handleSubmit} className="message-form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field ifname"
        />
      </label>
      <br />
      <label>
        Review:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field ifmsg"
        />
      </label>
      
      <br />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
    </div>
    
    <div className='output-msg'>
      <h2 className="messages-header">Reviews:</h2>
      {messages.map((msg, index) => (
        <div key={index} className="message-item">
          <div className='answer-box'>
             <p>{msg.message}</p>
             <h4>From: <i>{msg.name}</i></h4>
          </div>
        </div>
      ))}
  </div>
  </div>
  );
};

export default MessageForm;
