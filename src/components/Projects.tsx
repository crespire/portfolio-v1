import { FC } from 'react';
import { projects } from '../projects';
import ProjectCard from './ProjectCard';

const Projects: FC = () => {
  return (
    <section id="projects" className="grow min-h-screen h-fit pt-[3rem]">
      <h1 className="font-semibold text-[3rem] sm:text-[4rem] w-prose text-center text-salmon">Projects</h1>
      <div className="flex flex-wrap justify-center align-center space-2 grow h-fit gap-5">
        { projects.map(item => {
          return <ProjectCard key={item.key} project={item} />
        })}
      </div>
    </section>
  );
};

export default Projects;