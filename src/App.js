import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SwitchTheme from './components/SwitchTheme';
import Navbar from './navbar/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ItemList from './pages/Shop/ItemList';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const colors = {
    $text: theme === 'dark' ? '#fff' : '#000',
    $background: theme === 'dark' ? '#0a000b' : '#fff',
  }

  useEffect(() => {
    document.body.style.background = colors.$background
  }, [colors.$background])

  return (
    <div style={{overflowX: 'hidden'}}>
      <SwitchTheme colors={colors} setTheme={setTheme} theme={theme}/>
      <Navbar colors={colors} />
      <Routes>
        <Route path="/" element={<Home colors={colors} />} />
        <Route path="/shop" element={<ItemList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound colors={colors} />}/>
      </Routes>
    </div>
  );
}

export default App;