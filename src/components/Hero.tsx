import { FC } from 'react';
import Bounce from './Bounce';

const Hero: FC = () => {
  return (
    <section id="hero" className="flex flex-col justify-center items-center h-screen max-w-prose">
      <span>
        Hi, my name is
        <h1 className="font-semibold text-dynamic-large text-lake">Simmon Li</h1>
        <h3 className="italic text-dynamic-small">Budding full stack Rails developer.</h3>
        <p>
          Driven and independent with a high aptitude for learning, I strive for excellence while building software. I communicate effectively around technical topics and love teaching and talking about tech.

        </p>
      </span>
      <Bounce />
    </section>
  );
};

export default Hero;
