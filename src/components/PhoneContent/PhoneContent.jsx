import React, { useEffect } from 'react';
import './PhoneContent.scss';
import Message from '../Message/Message';
import sendButtonImage from '../../resources/send-button@2x.png';

const PhoneContent = ({
  data,
  onInputChange,
  updateChatData,
  inputText,
  handleKeypress,
}) => {
  useEffect(() => {
    //just to get the scroll to snap to the bottom at the start
    var messageBody = document.querySelector('#scroller');
    messageBody.scrollTop = messageBody.scrollHeight + messageBody.clientHeight;
  }, []);

  return (
    <div className='phone-content'>
      <div id='scroller' className='message-container'>
        {data.map((message) => {
          return (
            <Message
              onInputChange={onInputChange}
              updateChatData={updateChatData}
              message={message}
            ></Message>
          );
        })}
        <div id='anchor'></div>
      </div>
      <div className='input-container'>
        <input
          title='text-input'
          type='text'
          placeholder='Type a message...'
          onChange={onInputChange}
          value={inputText}
          onKeyDown={handleKeypress}
        ></input>
        <div className='button-container'>
          <button
            title='send-button'
            className='send-button'
            onClick={updateChatData}
          >
            <img src={sendButtonImage} alt='' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneContent;
