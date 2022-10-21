import { FC } from 'react';
import logo from './assets/logo.png';
import { Link } from "react-scroll";

const Header: FC = () => {
  return (
    <header className="sticky top-0 flex justify-between items-center border-b border-solid p-2 bg-pale dark:bg-coffee">
      <div><a href="#hero"><img className="max-w-[2rem]" src={logo} alt="SL" /></a></div>
      <nav className="flex justify-end items-center space-x-2">
        <Link
          className="link"
          activeClass="link-active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-58}
        >Hero</Link>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header