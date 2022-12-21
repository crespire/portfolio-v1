import { FC, useEffect } from 'react';

const Footer: FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const button = document.querySelector<HTMLElement>('#emailme');
      if (button !== null) {
        button.onclick = () => { window.location.href = atob('bWFpbHRvOmhlbGxvQGNyZXNwaXJlLmRldj9zdWJqZWN0PUhlbGxv') };
      }
    }
  }, []);

  return (
    <footer className="fixed left-0 bottom-0 w-full p-2 flex justify-center items-center bg-pale dark:bg-coffee">
      <section className="w-full max-w-prose flex justify-around items-center">
        <a className="border border-solid p-1" href="https://github.com/crespire">Github</a>
        <a className="border border-solid p-1" href="https://linkedin.com/in/simmonli">LinkedIn</a>
        <button id="emailme" className="border border-solid p-1">Email</button>
      </section>      
    </footer>
  );
}

export default Footer;