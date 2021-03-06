import React from 'react';
import './App.scss';
import HeroComponent from './components/HeroComponent/HeroComponent';

function App() {
  return (
    <div className='main-container'>
      <div className='left-mark'></div>
      <div className='right-mark'></div>
      <div className='hero-section'>
        <HeroComponent></HeroComponent>
      </div>
      <div className='watermark'>Michael Chan</div>
    </div>
  );
}

export default App;
