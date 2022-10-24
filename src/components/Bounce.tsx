import { FC } from 'react';
import ArrowIcon from '../assets/arrow-down.png';

const Bounce: FC = () => {
  return (
    <div className='relative max-w-[2rem] top-40 opacity-25 animate-bounce'>
      <img className="dark:invert" src={ArrowIcon} alt="&darr;" />
    </div>
  );
};

export default Bounce;