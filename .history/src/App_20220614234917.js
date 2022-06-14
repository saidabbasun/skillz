import About from './Components/About';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

import Workshops from './Components/Workshops';
import './styles/Globl/collection.scss';
import { BrowserRouter ,R } from "react-router-dom";
function App() {
  return (
<>

  <Header/>
 <Home/>
<Courses/>
 <Workshops/>
 <About/>
 <Footer/>

    </>
  );
}

export default App;
