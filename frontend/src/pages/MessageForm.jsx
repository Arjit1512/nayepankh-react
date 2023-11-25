import React, { useState, useEffect } from 'react';
import './MessageForm.css';

const MessageForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Arjit',
      message: 'I chose to donate to this organization because their mission resonates deeply with me.',
    },
    {
      name: 'Chandra',
      message: 'Thank you Nayepankh! I hope my small contribution can make a difference in someones life brings immense joy to my heart.',
    },
  ]);

  // Load messages and report from localStorage on component mount
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(prev => [...prev, storedMessages]);
  }, []);

  // Save messages and report to localStorage whenever the messages or report state changes
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() !== '' && message.trim() !== '') {
      const newMessage = { name, message };

      // Update messages state
      setMessages([...messages, newMessage]);

      // Update sample data (report) to include the new message


      setName('');
      setMessage('');

      // Update local storage with the updated report and messages
      localStorage.setItem('messages', JSON.stringify([...messages, newMessage]));
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
          msg && msg.name && msg.message && (
            <div key={index} className="message-item">
              <div className='answer-box'>
                <p>{msg.message}</p>
                <h4>From: <i>{msg.name}</i></h4>
              </div>
            </div>
          )
        ))}
      </div>
    </div>


  );
};

export default MessageForm;
