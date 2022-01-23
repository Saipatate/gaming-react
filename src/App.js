import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ItemList from './pages/Shop/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ItemList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;