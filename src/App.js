import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Cart from './pages/Cart';
import Wish from './pages/Wish';
import Pnf from './pages/Pnf';

function App() {
  return (
    <div className="App">
     <Header></Header>

    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/wish' element={<Wish></Wish>}></Route>
      <Route path='*' element={<Pnf></Pnf>}></Route>
    </Routes>
   
  

     <Footer></Footer>
    </div>
  );
}

export default App;
