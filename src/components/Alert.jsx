import React from 'react';
import './Alert.css';

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-container">
      <div className="alert-message">{message}</div>
      <div className='btn-alert-container'>
          <button className="alert-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Alert;
