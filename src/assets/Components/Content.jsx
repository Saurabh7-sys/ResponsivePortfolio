import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Content = () => {
  const [text] = useTypewriter({
    words: ['Front-end Developer', 'React'],
    loop: true,
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleCvClick = () => {
    alert("Resume is not uploaded yet. Please try again after a few days.");
  };

  return (
    <main className="flex-grow w-full max-w-full md:flex md:items-center md:justify-between md:gap-8 md:max-w-[1500px] md:mx-auto mt-5">
      <div className='px-5 md:min-w-[550px] md:ml-14'>
        <h1 className="text-3xl md:text-4xl font-bold">
          I&apos;m a{' '}
          <span className="text-blue-300 ">
            {text}
          </span>
          <Cursor cursorColor="yellow" />
        </h1>
        <p className='text-xl md:w-72 md:mt-12 md:text-2xl'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-300 to-blue-300'>
            Transforming ideas into elegant web experiences with React
          </span>
        </p>
      </div>
      <div className="cv md:max-h-80 md:relative md:top-[46px]">
        <img className='md:min-w-[600px] md:relative md:bottom-36 md:mr-16' src="/images/BIG GLOW.svg" alt="curveBall" />
        <img
          data-aos="zoom-in"
          className='w-20 relative bottom-28 left-14 md:z-40 md:w-28 md:relative md:top-[-450px] md:left-20 md:hover:scale-110 md:duration-200 cursor-pointer z-40'
          src="public\images\CVBALL.png"
          alt="CV"
          onClick={handleCvClick}
        />
        <img
          data-aos="zoom-in"
          className='w-[250px] relative bottom-[360px] left-[94px] md:w-[500px] md:relative md:top-[-812px] md:left-[150px]'
          src="\images\ProfilePhoto.png"
          alt="ProfilePhoto"
        />
      </div>
      <div data-aos="zoom-in" className="socials relative bottom-[280px] md:bottom-0">
        <div className="flex justify-center items-center gap-8 md:flex md:flex-col md:items-center md:gap-4">
          <a href="https://github.com/Saurabh7-sys">
            <img src="/images/ant-design_github-filled.png" alt="GitHub" className="w-14 h-14 md:w-14 md:h-12 md:hover:scale-110 md:duration-200 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-shelar-851ab5216/">
            <img src="/images/mdi_linkedin.png" alt="LinkedIn" className="w-14 h-14 md:w-14 md:h-12 md:hover:scale-110 md:duration-200 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/saurabh_0_7_/">
            <img src="/images/Vector.png" alt="Other Social" className="w-14 h-14 mt-1 md:w-14 md:h-12 md:hover:scale-110 md:duration-200 cursor-pointer" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Content;
