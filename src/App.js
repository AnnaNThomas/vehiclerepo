import logo from './logo.svg';
import './App.css';
import Addvehicle from './components/Addvehicle';
import Searchvehicle from './components/Searchvehicle';
import Viewvehicle from './components/Viewvehicle';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addvehicle/>}/>
      <Route path='/Searchvehicle' element={<Searchvehicle/>}/>
      <Route path='/Viewvehicle' element={<Viewvehicle/>}/>
      <Route path='/Nav' element={<Nav/>}/>

      </Routes>
      </BrowserRouter>
  );
}

export default App;
