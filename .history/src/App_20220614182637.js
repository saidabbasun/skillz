import About from './Components/About';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Sheet from './Components/Sheet';
import Workshops from './Components/Workshops';
import './styles/Globl/collection.scss';

function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <Courses/>
    <Workshops/>
    <About/>
    <Footer/>
    <Sheet/>
    </div>
  );
}

export default App;