import React from 'react';
import './WelcomeMessage.css'; // Import your CSS file

const WelcomeMessage = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Our Community!</h1>
      <p id="bot-message">Hello there! I'm your friendly virtual assistant, here to make your experience enjoyable and informative. How can I assist you today?</p>
    </div>
  );
};

export default WelcomeMessage;
