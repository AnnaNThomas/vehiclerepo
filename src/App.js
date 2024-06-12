import logo from './logo.svg';
import './App.css';
import Addvehicle from './components/Addvehicle';
import Searchvehicle from './components/Searchvehicle';
import Viewvehicle from './components/Viewvehicle';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Addvehicle/>
      <Searchvehicle/>
      <Viewvehicle/>
      <Nav/>
    </div>
  );
}

export default App;
