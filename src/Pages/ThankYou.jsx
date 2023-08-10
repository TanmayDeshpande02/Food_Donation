import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate(); 
    setTimeout(() => {
        navigate('/');
    }, 2000);
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const textStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    color: '#333',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>
        Thanks For Donating
      </h1>
    </div>
  );
};

export default ThankYou;
