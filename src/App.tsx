import { FC } from 'react';
import { Outlet } from 'react-router-dom';

// Template for Site
const App: FC = () => {
  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
