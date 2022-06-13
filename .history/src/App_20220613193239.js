import About from './Components/About';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header';
import Home from './Components/Home';
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
    </div>
  );
}

export default App;
