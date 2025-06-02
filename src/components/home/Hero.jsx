import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ['FRONTEND WEB DEVELOPER'],
    delaySpeed: 3000,
    loop: true,
    deleteSpeed: 50,
  });

  return (
    <div
      className='text-baseGray h-[100vh] flex items-center justify-center relative herobackground'
      id='home'
    >
      <div className='text-center'>
        <h1 className='md:text-[4.5vw] text-[7vw] font-bold text-baseColor ankitName'>
          ANKIT SINGH
        </h1>
        <Fade>
          <p className='md:text-[3.5vw] text-[6vw] ankitName2'>{typeEffect}</p>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
