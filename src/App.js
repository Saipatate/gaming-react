import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import ItemList from './pages/Shop/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ItemList />} />
      </Routes>
    </div>
  );
}

export default App;