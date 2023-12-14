

import { Route, Routes } from 'react-router-dom';
import './App.css';
import SiteNav from './layout/SiteNav';
import Home from './components/Home';
import About from './components/About';
import ReduxExample from './components/ReduxExample';
import  i18n  from 'i18next';

function App() {
  console.log(i18n)
  return (
    <div className="App">
     <SiteNav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/redux_example' element={<ReduxExample/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
