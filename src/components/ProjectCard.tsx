import { FC } from 'react';
import { ProjectProps } from '../@types/projectCardProps';

const ProjectCard: FC<ProjectProps> = ({project}) => {
  return (
    <article id={project.id} className="grid grid-cols-card p-2 transition ease-in duration-300 hover:scale-110">
      <div>
        img
      </div>
      <nav>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
      </nav>
      <section>
        <h3 className="text-[1.25rem]">{project.name}</h3>
        <span className="text-[.75rem] italic">{project.tech.join(', ')}</span>
        <p>{project.blurb}</p>
      </section>
      
    </article>
  );
};

export default ProjectCard;