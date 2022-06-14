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
<div>
  <Header/>
      <Routes>
      
   
<Route path='/'  element={ <Home/>}/>
<Route path='/' element={<Courses/>}/>
<Route path='/' element={ <Workshops/>}/>
<Route path='/' element={ <About/>}/>

  
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
