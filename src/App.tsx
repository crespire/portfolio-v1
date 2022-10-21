import Header from './Header';
import Footer from './Footer';
import { FC } from 'react';
import Hero from './components/Hero';

// Main Site
const App: FC = () => {
  return (
    <div className="container mx-auto h-full max-w-prose p-4">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
