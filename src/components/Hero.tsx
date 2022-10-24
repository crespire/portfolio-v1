import { FC } from 'react';
import Bounce from './Bounce';

const Hero: FC = () => {
  return (
    <section id="hero" className="flex flex-col justify-center items-center h-screen">
      <span>
        Nice to meet you! I'm
        <h1 className="font-semibold text-dynamic-large text-lake">Simmon Li</h1>
        <h3 className="italic text-dynamic-small">I love building things with code.</h3>
      </span>
      <Bounce />
    </section>
  );
};

export default Hero;