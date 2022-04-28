import logo from './logo.svg';
import './App.css';
import { foods } from './food-data';
// import your arrays here

function App() {
  return (
    <div className="App">
        <FoodList foods={foods}/>
    </div>
  );
}

export default App;
