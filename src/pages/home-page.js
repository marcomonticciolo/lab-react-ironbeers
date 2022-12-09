import { NavLink } from "react-router-dom";
import BeerListImage from '../assets/beers.png'
import CreateBeerImage from '../assets/new-beer.png'
import RandomBeerImg from '../assets/random-beer.png'



function HomePage (){
    return (

        <nav>

<h1> IronBeers Lab</h1>

           <div>
        <NavLink to="/beers">
        <img src={BeerListImage} />
        <h1>Beer list</h1>
        </NavLink>
        <h3>click here to display of all beers</h3>
        </div> 

  <hr></hr>

        <div>
        <NavLink to="/random-beer">
        <img src={CreateBeerImage} />
        <h1>Generate Random Beer</h1>
        </NavLink>
        <h3>Click here if you want to generate a random beer</h3>
        </div>

   <hr></hr>

        <div>
        <NavLink to="/new-beer">
        <img src={RandomBeerImg} />
        <h1>New Beer</h1>
        </NavLink>
        <h3>Click here if you want to make a new beer</h3>
       </div>

    </nav>

    )
}

export default HomePage