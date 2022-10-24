import { FC } from 'react';

const About: FC = () => {
  return (
    <section id="about" className="flex flex-col leading-relaxed sm:leading-10 justify-center items-start h-screen space-y-4">
      <h1 className="font-semibold text-[3rem] sm:text-[4rem] text-tangerine text-center w-full">About Me</h1>
      <p>
        My name is Simmon Li and I love creating things from Pong to fullstack applications. Since September 2021, I've been learning via <a className="underline" href="https://theodinproject.com">The Odin Project</a>. I'm currently an operations professional, but looking for an opportunity to jump into a career in software development.
      </p>
      <span className="w-full">
        <h3 className="text-[1.25rem]">Current Skills</h3>
        <ul className="grid grid-cols-2 gap-1 sm:gap-3 list-disc list-inside">
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </span>      
    </section>
  );
};

export default About;