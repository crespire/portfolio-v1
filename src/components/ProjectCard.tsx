import { FC } from 'react';
import { ProjectProps } from '../@types/projectCardProps';
import GitHubIcon from '../assets/github-icon.png';
import GlobeIcon from '../assets/globe-icon.png';

const ProjectCard: FC<ProjectProps> = ({project}) => {
  return (
    <article id={project.id} className="group sm:m-5 flex flex-col p-2 transition ease-in duration-300 hover:scale-110 max-w-prose sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5 border-b pb-5 border-solid border-coffee dark:border-pale sm:border-0 last-of-type:border-b-0 last-of-type:pb-2">
      <header className="flex justify-center items-center">
        <img className="max-w-[14.5rem] max-h-[8.5rem] object-fill object-center grayscale transition ease-in duration-300 group-hover:grayscale-0" src={project.img} alt={project.name} />
      </header>
      <nav className='flex items-center justify-between'>
        <a href={project.liveURL}><h3 className="text-[1.25rem] hover:underline">{project.name}</h3></a>
        <div className="flex min-w-[3rem] justify-evenly items-center py-2">
          <span>
              <a href={project.liveURL} className="">
                <img className="max-w-[1rem] dark:invert transition ease-in hover:scale-125" src={GlobeIcon} alt="Live" />
              </a>
            </span>
            <span>
              { project.repoURL &&
                <a href={project.repoURL} className="">
                  <img className="max-w-[1rem] dark:invert transition ease-in hover:scale-125" src={GitHubIcon} alt="Repository" />
                </a>
              }
            </span>
        </div>
      </nav>
      
      <section className="">        
        <span className="text-[.75rem] italic">{project.tech.join(', ')}</span>
        <p>{project.blurb}</p>
      </section>
      
    </article>
  );
};

export default ProjectCard;
