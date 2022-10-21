import Header from './Header';
import Footer from './Footer';
import { FC } from 'react';
import Hero from './components/Hero';

// Main Site
const App: FC = () => {
  return (
    <div className="container mx-auto h-full max-w-prose px-4 bg-pale text-coffee dark:text-pale dark:bg-coffee">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
