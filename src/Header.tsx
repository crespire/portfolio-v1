import { FC } from 'react';
import logo from './assets/logo.png';
import { Link } from "react-scroll";

const headerOffset = 0;

const Header: FC = () => {
  return (
    <header className="sticky top-0 flex justify-between items-center border-b border-solid p-2 bg-pale dark:bg-coffee h-12">
      <div className="max-h-fit"><Link to="hero" spy={false} smooth={true} offset={headerOffset}><img className="max-h-[2rem]" src={logo} alt="SL" /></Link></div>
      <nav className="max-h-4 flex justify-end items-center space-x-2">
        <Link
          className="link"
          activeClass="link-active"
          to="about"
          spy={true}
          smooth={true}
          offset={headerOffset}
        >About</Link>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header