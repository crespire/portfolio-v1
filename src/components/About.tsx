import { FC } from 'react';

const About: FC = () => {
  return (
    <section id="about" className="grow min-h-screen h-fit landscape:pt-[5rem] landscape:lg:pt-0">
      <div className="flex flex-col max-w-prose justify-center items-start h-screen space-y-4">
        <h1 className="font-semibold text-[3rem] sm:text-[4rem] text-tangerine text-center w-full">About Me</h1>
        <p>
        I'm an ambitious, self-taught developer who loves working through problems. With a bias for action and a willingness to grind, I'm not afraid to fail (in a feature branch, of course) while delivering high-quality work. I have a proven record of continuous self directed learning and improvement. Take a look at <a className="underline" href="https://github.com/crespire">my Github history</a> to see my passion for coding in action.
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
