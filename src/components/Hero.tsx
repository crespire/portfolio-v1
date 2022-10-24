import { FC } from 'react';
import Bounce from './Bounce';

const Hero: FC = () => {
  return (
    <section id="hero" className="flex flex-col justify-center items-center h-screen">
      <span>
        Nice to meet you! I'm
        <h1 className="font-semibold text-[3rem] sm:text-[4rem]">Simmon Li</h1>
        <h3 className="italic text-[1.25rem]">I love writing code.</h3>
      </span>
      <Bounce />
    </section>
  );
};

export default Hero;