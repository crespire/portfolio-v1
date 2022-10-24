import { FC } from 'react';
import ArrowLight from '../assets/arrow-down-light.png';
import ArrowDark from '../assets/arrow-down-dark.png';

const Bounce: FC = () => {
  return (
    <div className='relative top-40 opacity-25 animate-bounce'>
      <picture>
        <source srcSet={ArrowLight} media="(prefers-color-scheme: dark)" />
        <img src={ArrowDark} alt="&darr;" />
      </picture>
    </div>
  );
};

export default Bounce;