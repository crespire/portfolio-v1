import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-full p-2 flex justify-center items-center bg-pale dark:bg-coffee">
      <section className="w-full max-w-prose flex justify-around items-center">
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
      </section>      
    </footer>
  );
}

export default Footer;