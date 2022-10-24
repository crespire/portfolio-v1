import myResume from '../assets/Simmon_Li_Resume.pdf';
import { FC } from 'react';

const Resume: FC = () => {
  return (
    <section id="resume" className="flex flex-col leading-relaxed sm:leading-10 justify-center items-center h-screen space-y-4">
      <h1 className="font-semibold text-[3rem] sm:text-[4rem] text-lake">Hire Me!</h1>
      <p>You can find an <a className="underline" href="https://crespire.github.io/crespire/resume">online version of my resume here.</a></p>
      <span className="w-full flex justify-center">
        <a className="p-4 border-solid border border-coffee dark:border-pale" href={myResume} download="Simmon_Li_Resume.pdf">Download PDF (51kb)</a>
      </span>      
    </section>
  );
};

export default Resume;