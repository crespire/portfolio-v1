import { FC } from 'react';

const About: FC = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-start h-[93.5vh] space-y-4">
      <h1 className="font-semibold text-[3rem]">About Me</h1>
      <p>
        My name is Simmon Li and I love creating things for the web as well as to make my own life easier. Since September 2021, I've been learning via <a className="underline" href="https://theodinproject.com">The Odin Project</a>. I'm currently an operations professional, but looking for an opportunity to jump into a career in software development.
      </p>
      <p>
        <h3 className="text-[1.25rem]">Current Skills</h3>
        <ul className="grid grid-cols-2 gap-1 list-disc list-inside">
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>Javascript (ES6+)</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </p>      
    </section>
  );
};

export default About;