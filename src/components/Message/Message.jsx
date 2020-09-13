import React from 'react';
import './Message.scss';

const Message = ({ message }) => {
  const createMessage = () => {
    let messageClass = '';
    if (message.newChatBlock) {
      messageClass += ' extra-margin-top';
    }
    if (message.to === 'self') {
      messageClass += ' right box-shadow';
    } else {
      messageClass += ' left';
    }
    switch (message.type) {
      case 'text':
        messageClass += ' text';

        return <div className={messageClass}>{message.message}</div>;
      case 'image':
        messageClass += ' image-container';
        return (
          <div className={messageClass}>
            {message.images.map((imageName) => {
              return (
                <img
                  className='box-shadow'
                  src={require('../../resources/' + imageName)}
                  alt=''
                />
              );
            })}
          </div>
        );
      case 'selection':
        messageClass += ' text selection';
        return (
          <div className={messageClass}>
            <div className='circle'></div>
            <p className='selection-text'>{message.message}</p>
            <p className='price'>${message.price}</p>
          </div>
        );
      default:
        return <div>Message Failed</div>;
    }
  };

  return createMessage(message);
};

export default Message;
