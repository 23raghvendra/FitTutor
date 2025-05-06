import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from './pages/Home'
import Footer from './Components/footer/footer';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`app-container ${theme}`} data-theme={theme}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Footer />
    </div>
  )
}

export default App