import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section id="hero" className="flex flex-col justify-center items-center h-[93.5vh]">
      <span>
        Nice to meet you! I'm
        <h1 className="font-semibold text-[4rem]">Simmon Li</h1>
        <h3 className="italic text-[1.25rem]">I write apps for the web.</h3>
      </span>
    </section>
  );
};

export default Hero;