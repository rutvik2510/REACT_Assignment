
import React from 'react';


const DynamicMessage = ({ status }) => {
  
  const getMessage = (status) => {
    switch (status) {
      case 'success':
        return { text: 'Operation completed successfully!', color: 'green' };
      case 'error':
        return { text: 'An error occurred during the operation.', color: 'red' };
      case 'warning':
        return { text: 'Warning: Please check your input.', color: 'orange' };
      default:
        return { text: 'Status unknown.', color: 'gray' };
    }
  };

  const messageInfo = getMessage(status);

  return (
    <div>
      <p style={{ color: messageInfo.color }}>
        {messageInfo.text}
      </p>
    </div>
  );
};


export default DynamicMessage;
