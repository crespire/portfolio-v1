import { FC } from 'react';
import { ProjectProps } from '../@types/projectCardProps';
import GitHubLight from '../assets/github-light.png';
import GitHubDark from '../assets/github-dark.png';
import GlobeLight from '../assets/globe-light.png';
import GlobeDark from '../assets/globe-dark.png';

const ProjectCard: FC<ProjectProps> = ({project}) => {
  return (
    <article id={project.id} className="grid grid-cols-card p-2 transition ease-in duration-300 hover:scale-125">
      <div>
        img
      </div>
      <nav className="flex flex-col justify-evenly items-center px-2">
        <span>
          <picture>
            <source srcset={GitHubLight} media="(prefers-color-scheme: dark)" />
            <img className="max-w-[1rem]" src={GitHubDark} alt="Repository" />
          </picture>
        </span>
        <span>
          <picture>
            <source srcset={GlobeLight} media="(prefers-color-scheme: dark)" />
            <img className="max-w-[1rem]" src={GlobeDark} alt="Repository" />
          </picture>
        </span>
      </nav>
      <section className="p-2">
        <h3 className="text-[1.25rem]">{project.name}</h3>
        <span className="text-[.75rem] italic">{project.tech.join(', ')}</span>
        <p>{project.blurb}</p>
      </section>
      
    </article>
  );
};

export default ProjectCard;