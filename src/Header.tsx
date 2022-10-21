import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="sticky top-0 border-b border-black border-solid p-2">
      <div>LOGO</div>
      <nav className="">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header