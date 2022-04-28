import './App.css';
import { foods } from './food-data';
import FoodList from './foodList';
import { drinks } from './drinks-data';
import DrinkList from './drinksList';
import { animals } from './animals-data';
import AnimalList from './animalList';
import { books } from './books-data';
import BookList from './BookList';
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
