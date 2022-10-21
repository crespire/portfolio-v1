import Header from './Header';
import Footer from './Footer';
import { FC, RefObject, useRef } from 'react';
import Hero from './components/Hero';

// Main Site
const App: FC = () => {
  const scrollTarget = useRef<HTMLElement>(null);
  const scrollTo = (ref: RefObject<HTMLElement>) => {
    console.log(ref.current);
    // ref.current?.scrollIntoView( { behavior: 'smooth' } );
  }

  return (
    <div className="container mx-auto h-full max-w-prose p-4">
      <Header scrollTo={scrollTo} />
      <main>
        <Hero ref={scrollTarget} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
