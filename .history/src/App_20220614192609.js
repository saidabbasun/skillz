import About from './Components/About';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

import Workshops from './Components/Workshops';
import './styles/Globl/collection.scss';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  
      <Routes>
      <Route index element={   <Header/>}/>
   
<Route path='/home' element={ <Home/>}/>
<Route path='home' element={  <Courses/>}/>
<Route path='home' element={ <Workshops/>}/>
<Route path='home' element={ <About/>}/>
<Route  index element={   <Footer/>}/>
  
    </Routes>
   
  );
}

export default App;
