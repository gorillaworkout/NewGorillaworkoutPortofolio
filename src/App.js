import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact';
import Work from './Pages/Work/Work';

import LoadingAwal from './Pages/LoadingAwal/LoadingAwal.jsx'
// import "node_modules/video-react/dist/video-react.css"; // import css

function App() {
  return (
    <Routes>
      <Route exact path = '/' element={<LoadingAwal new_params={"testing"}/>}/>
      <Route exact path = '/Home' element={<Home new_params={"testing"}/>}/>
      <Route exact path = '/about-me' element={<About new_params={"testing"}/>}/>
      <Route exact path = '/contact-me' element={<Contact new_params={"testing"}/>}/>
      <Route exact path = '/Work' element={<Work new_params={"testing"}/>}/>

    </Routes>
  );
}

export default App;
