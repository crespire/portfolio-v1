import Header from './Header';
import Footer from './Footer';
import { FC, useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

const App: FC = () => {
  const [currentTheme, setCurrentTheme] = useState(null);
  const themeToggle = () => {
    setCurrentTheme(oldTheme => oldTheme === 'dark' ? 'light' : 'dark');    
  }

  useEffect(() => {
    const darkModePref = window.matchMedia('(prefers-color-scheme: dark)');

    if (currentTheme === null || !localStorage.getItem('theme')) {
      let theme = darkModePref.matches ? 'dark' : 'light';

      if (darkModePref.matches) {
        document.body.classList.add('dark');
      }

      setCurrentTheme(theme);
      localStorage.theme = theme;
    } else if (currentTheme === 'dark' && localStorage.getItem('theme') === 'light') {
      document.body.classList.add('dark');
      setCurrentTheme('dark');
      localStorage.theme = 'dark';
    } else if (currentTheme === 'light' && localStorage.getItem('theme') === 'dark') {
      document.body.classList.remove('dark');
      setCurrentTheme('light');
      localStorage.theme = 'light';
    }
  // eslint-disable-next-line
  }, [currentTheme, setCurrentTheme]);

  return (
    <div className="container mx-auto h-full max-w-prose px-4 bg-pale text-coffee dark:text-pale dark:bg-coffee">
      <Header currentTheme={currentTheme} themeToggle={themeToggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
