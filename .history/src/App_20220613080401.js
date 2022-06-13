import Courses from './Components/Courses/Courses';
import Header from './Components/Header';
import Home from './Components/Home';
import Workshops from './Components/Workshops/Workshops';
import './styles/Globl/collection.scss';

function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <Courses/>
    <Workshops/>
    </div>
  );
}

export default App;
