import logo from './logo.svg';
import './App.css';
import { foods } from './food-data';
import { drinks } from './drinks-data';
// import your arrays here

function App() {
  return (
    <div className="App">
        <FoodList foods={foods}/>
        <DrinkList drinks={drinks}/>
    </div>
  );
}

export default App;
