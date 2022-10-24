import { FC } from 'react';
import { ProjectProps } from '../@types/projectCardProps';
import GitHubIcon from '../assets/github-icon.png';
import GlobeIcon from '../assets/globe-icon.png';

const ProjectCard: FC<ProjectProps> = ({project}) => {
  return (
    <article id={project.id} className="project-card">
      <div className="p-2 flex justify-center items-center">
        <img className="object-cover object-center shadow-md grayscale" src={project.img} alt={project.name} />
      </div>
      <nav className="flex flex-col justify-evenly items-center px-2">
      <span>
          <a href={project.liveURL}>
            <img className="max-w-[1rem] dark:invert" src={GlobeIcon} alt="Live" />
          </a>
        </span>
        <span>
          <a href={project.repoURL}>
            <img className="max-w-[1rem] dark:invert" src={GitHubIcon} alt="Repository" />
          </a>
        </span>        
      </nav>
      <section className="p-2">
        <a href={project.liveURL}><h3 className="text-[1.25rem]">{project.name}</h3></a>
        <span className="text-[.75rem] italic">{project.tech.join(', ')}</span>
        <p>{project.blurb}</p>
      </section>
      
    </article>
  );
};

export default ProjectCard;