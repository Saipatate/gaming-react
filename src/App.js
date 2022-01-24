import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SwitchTheme from './components/SwitchTheme';
import Navbar from './navbar/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ItemList from './pages/Shop/ItemList';

function App() {
  const [theme, setTheme] = useState('theme', 'dark')

  const colors = {
    $text: theme === 'dark' ? '#fff' : '#000',
    $background: theme === 'dark' ? '#0a000b' : '#fff',
    $burger: theme === 'dark' ? '#fff' : '#000',
  }

  useEffect(() => {
    document.body.style.background = colors.$background
  }, [colors.$background])

  return (
    <div className="App">
      <SwitchTheme colors={colors} setTheme={setTheme} theme={theme}/>
      <Navbar colors={colors} />
      <Routes>
        <Route path="/" element={<Home colors={colors} />} />
        <Route path="/shop" element={<ItemList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;