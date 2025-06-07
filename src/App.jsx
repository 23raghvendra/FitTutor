import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './pages/Home';
import Footer from './Components/Footer/footer';
import Workout from './Components/home/Workout';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`app-container ${theme}`} data-theme={theme}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;