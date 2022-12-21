import { FC } from 'react';

const About: FC = () => {
  return (
    <section id="about" className="grow min-h-screen h-fit landscape:pt-[5rem] landscape:lg:pt-0">
      <div className="flex flex-col max-w-prose leading-relaxed sm:leading-10 justify-center items-start h-screen space-y-4">
        <h1 className="font-semibold text-[3rem] sm:text-[4rem] text-tangerine text-center w-full">About Me</h1>
        <p>
          I love working through a problem step by step and solving it. I've got a bias for action and I'm not afraid to fail (in a feature branch, of course). I'm a self-taught developer with a proven record of continuous self-learning and improvement. Feel free to take a look at <a className="underline" href="https://github.com/crespire">my Github history</a> and consider putting my drive and passion to work for your team.
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
      </div>
    </section>
  );
};

export default About;