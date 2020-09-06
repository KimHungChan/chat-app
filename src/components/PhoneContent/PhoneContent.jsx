import React from 'react';
import './PhoneContent.scss';
import dogImage1 from '../../resources/dog-image-1.jpg';
import dogImage2 from '../../resources/dog-image-2.jpg';
import dogImage3 from '../../resources/dog-image-3.jpg';

const PhoneContent = () => {
  return (
    <div className='phone-content'>
      <div className='user-message'>
        <p>That sounds great. I'd be happy to discuss more.</p>
      </div>
      <div className='user-message'>
        <p>Could you send over some pictures of your dog, please?</p>
      </div>
      <div className='images'>
        <img src={dogImage1} alt='' />
        <img src={dogImage2} alt='' />
        <img src={dogImage3} alt='' />
      </div>
      <div className='contact-message'>
        <p>Here are a few pictures. She's a happy girl!</p>
      </div>
      <div className='contact-message'>
        <p>Can you make it?</p>
      </div>
      <div className='user-message'>
        <p>
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </p>
        <div className='selection-1'>30 min walk</div>
        <div className='selection-2'>1 hour walk</div>
        <div className='input-container'>
          <input type='text' placeholder='Type a message...' />
          <button className='send-button'></button>
        </div>
      </div>
    </div>
  );
};

export default PhoneContent;
