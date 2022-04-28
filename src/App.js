import './App.css';
import { foods } from './food-data.js';
import FoodList from './FoodList.js';
import { drinks } from './drinks-data.js';
import DrinkList from './DrinksList.js';
import { animals } from './animals-data.js';
import AnimalList from './AnimalList.js';
import { books } from './books-data.js';
import BookList from './BookList.js';
// import your arrays here

function App() {
  return (
    <div className="App">
      <FoodList foods={foods}/>
      <DrinkList drinks={drinks}/>
      <AnimalList animals={animals}/>
      <BookList books={books}/>
    </div>
  );
}

export default App;
