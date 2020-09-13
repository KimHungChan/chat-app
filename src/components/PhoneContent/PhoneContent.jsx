import React from 'react';
import './PhoneContent.scss';
import Message from '../Message/Message';
import sendButtonImage from '../../resources/send-button@2x.png';

const PhoneContent = ({ data }) => {
  console.log('PhoneContent -> data', data);
  return (
    <div className='phone-content'>
      {data.map((message) => {
        return <Message message={message}></Message>;
      })}
      <div className='input-container'>
        <input type='text' placeholder='Type a message...'></input>
        <div className='button-container'>
          <button className='send-button'>
            <img src={sendButtonImage} alt='' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneContent;
