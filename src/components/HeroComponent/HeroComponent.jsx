import React from 'react';
import './HeroComponent.scss';
import './Arrow.scss';
import contactPicture from '../../resources/avatar.jpg';
import PhoneContent from '../PhoneContent/PhoneContent';
import chatData from './dummyChatData';

const HeroComponent = () => {
  return (
    <div className='hero'>
      <div className='mobile-illustration'>
        <div className='top-section'>
          <div className='background'>
            <div className='notch'></div>
            <div className='contact-container'>
              <div class='arrow'></div>
              <img src={contactPicture} alt='' />
              <div>
                <p className='contact-name'>Samuel Green</p>
                <p className='contact-status'>Avaliable to Walk</p>
              </div>
              <div className='options'></div>
            </div>
          </div>
        </div>
        <PhoneContent data={chatData}></PhoneContent>
      </div>
      <div className='description-container'>
        <h1>Simple booking</h1>
        <p>
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
