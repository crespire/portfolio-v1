import { FC } from 'react';
import { projects } from '../projects';
import ProjectCard from './ProjectCard';

const Projects: FC = () => {
  return (
    <section id="projects" className="h-screen flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center">
        <h1 className="font-semibold text-[3rem] sm:text-[4rem] row-start-1 col-span-full">Projects</h1>
        { projects.map(item => {
          return <ProjectCard key={item.key} project={item} />
        })}
      </div>
      
    </section>
  );
};

export default Projects;