import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const onAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div className="app d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <div 
          className={`fade-${transitionStage}`}
          onAnimationEnd={onAnimationEnd}
          style={{
            height: '100%',
            width: '100%',
            position: 'relative',
            opacity: transitionStage === 'fadeIn' ? 1 : 0,
            transition: 'opacity 300ms ease-in-out'
          }}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
