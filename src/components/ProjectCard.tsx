import { FC } from 'react';
import { ProjectProps } from '../@types/projectCardProps';
import GitHubLight from '../assets/github-light.png';
import GitHubDark from '../assets/github-dark.png';
import GlobeLight from '../assets/globe-light.png';
import GlobeDark from '../assets/globe-dark.png';

const ProjectCard: FC<ProjectProps> = ({project}) => {
  return (
    <article id={project.id} className="project-card">
      <div className="p-2 flex justify-center items-center">
        <img className="object-cover object-center shadow-md grayscale" src={project.img} alt={project.name} />
      </div>
      <nav className="flex flex-col justify-evenly items-center px-2">
      <span>
          <a href={project.liveURL}>
            <picture>
              <source srcSet={GlobeLight} media="(prefers-color-scheme: dark)" />
              <img className="max-w-[1rem]" src={GlobeDark} alt="Live" />
            </picture>
          </a>
        </span>
        <span>
          <a href={project.repoURL}>
            <picture>
              <source srcSet={GitHubLight} media="(prefers-color-scheme: dark)" />
              <img className="max-w-[1rem]" src={GitHubDark} alt="Repository" />
            </picture>
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