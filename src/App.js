import './App.css';
import { foods } from './food-data';
import FoodList from './foodList';
import { drinks } from './drinks-data';
import DrinkList from './drinksList';
import { animals } from './animals-data';
import animalList from './animalList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <FoodList foods={foods}/>
      <DrinkList drinks={drinks}/>
      <AnimalList animals={animals}/>
    </div>
  );
}

export default App;
