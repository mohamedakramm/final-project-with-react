

import { Route, Routes } from 'react-router-dom';
import './App.css';
import SiteNav from './layout/SiteNav';
import Home from './views/Home';
import About from './views/About';
import ReduxExample from './components/ReduxExample';
import Products from './views/Products';
import { useTranslation } from 'react-i18next';
import ProductDetails from './components/ProductDetails';


function App() {
  const {i18n}=useTranslation();
  return (
    <div className={i18n.language==="ar"?"rtl":"" }>
     <SiteNav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/redux_example' element={<ReduxExample/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:productId' element={<ProductDetails/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
