import About from './Components/About';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

import Workshops from './Components/Workshops';
import './styles/Globl/collection.scss';
import {BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
<div>
  <Router>
  <Header/>
 <Home/>
<Courses/>
 <Workshops/>
 <About/>
 <Footer/>
    </div>
  );
}

export default App;
