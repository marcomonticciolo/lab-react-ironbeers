import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import AllBeers from './pages/beers';
import NewBeer from './pages/new-beer';
import RandomBeer from './pages/random-beer';
import HomePage from './pages/home-page';
import BeerDetails from './pages/beer-details';



function App() {
  return (
    <div className="App">



<Routes>

  <Route path="/" element={<HomePage />} />
  <Route path="/beers" element={<AllBeers/>} />
  <Route path="/new-beer" element={<NewBeer/>} />
  <Route path="/random-beer" element={<RandomBeer/>} />
  <Route path="/beers/:id" element={<BeerDetails/>} />

</Routes>
      
    </div>
  );
}

export default App;
