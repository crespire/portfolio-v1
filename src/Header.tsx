import { FC } from 'react';
import logo from './assets/logo.png';

const Header: FC = () => {
  return (
    <header className="sticky top-0 flex justify-between items-center border-b border-black border-solid p-2 bg-pale dark:bg-coffee">
      <div><a href="#hero"><img className="max-w-[2rem]" src={logo} alt="SL" /></a></div>
      <nav className="flex justify-end items-center space-x-2">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header