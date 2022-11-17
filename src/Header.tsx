import logo from './assets/logo.png';
import { Link } from "react-scroll";

const headerOffset = 0;

const Header = (props: any) => {
  const { currentTheme, themeToggle } = props;

  return (
    <header className="sticky top-0 flex justify-between items-center border-b border-solid p-2 bg-pale dark:bg-coffee h-12 z-10">
      <div className="max-h-fit"><Link to="hero" spy={true} smooth={true} offset={headerOffset}><img className="max-h-[2rem]" src={logo} alt="SL" /></Link></div>
      <nav className="max-h-4 flex justify-end items-center space-x-2">
        <Link
          className="link"
          activeClass="link-active"
          to="about"
          spy={true}
          smooth={true}
          offset={headerOffset}
        >About</Link>
        <Link
          className="link"
          activeClass="link-active"
          to="projects"
          spy={true}
          smooth={true}
          offset={headerOffset}
        >Projects</Link>
        <Link
          className="link"
          activeClass="link-active"
          to="resume"
          spy={true}
          smooth={true}
          offset={headerOffset}
        >Resume</Link>
        <div className="flex space-x-1">
          <input type="checkbox" id="theme" name="theme" checked={currentTheme === 'dark'} onChange={themeToggle} />
          <label htmlFor="theme">Dark</label>
        </div>
      </nav>
    </header>
  );
}

export default Header