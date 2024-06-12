import logo from './logo.svg';
import './App.css';
import Addvehicle from './components/Addvehicle';
import Searchvehicle from './components/Searchvehicle';
import Viewvehicle from './components/Viewvehicle';

function App() {
  return (
    <div>
      <Addvehicle/>
      <Searchvehicle/>
      <Viewvehicle/>
    </div>
  );
}

export default App;
