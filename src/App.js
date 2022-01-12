import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import LoadingAwal from './Pages/LoadingAwal/LoadingAwal.jsx'
function App() {
  return (
    <Routes>
      <Route exact path = '/' element={<LoadingAwal new_params={"testing"}/>}/>
      <Route exact path = '/home' element={<Home new_params={"testing"}/>}/>
    </Routes>
  );
}

export default App;
