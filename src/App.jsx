import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './pages/Home';
import Footer from './Components/Footer/footer';
import Workout from './Components/home/Workout';
import Progress from './Components/Progress/Progress';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`app-container ${theme}`} data-theme={theme}>
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/progress" element={<Progress />}>
              <Route index element={<div>Dashboard Content</div>} />
              <Route path="goals" element={<div>Goals Content</div>} />
              <Route path="measurements" element={<div>Measurements Content</div>} />
              <Route path="calendar" element={<div>Calendar Content</div>} />
              <Route path="photos" element={<div>Photos Content</div>} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;