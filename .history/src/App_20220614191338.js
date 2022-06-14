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
      <Routes>
    <Header/>
<Route element/>
    <Home/>
    <Courses/>
    <Workshops/>
    <About/>
    <Footer/>
    </Routes>
    </div>
  );
}

export default App;
