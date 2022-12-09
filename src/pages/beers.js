import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeImg from '../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png'
import axios from 'axios'



function AllBeers (){


    const [beers, setBeers] = useState([])
    
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            setBeers(axiosResponse.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (


    <div>

         <NavLink to="/">
            <img src={HomeImg}/>
        </NavLink>

        <h1>Here are all the Beers</h1>
<div className="BeerList">
      {beers.map(singleBeer => {
        return (
        <div className="single"  key={singleBeer._id}>

            <NavLink to={`/beers/${singleBeer._id}`}>
            <img className="Img" src={singleBeer.image_url} alt=""/>
            </NavLink>
            <div>
            <h2>{singleBeer.name}</h2>
            <p>{singleBeer.tagline}</p>
            <p>{singleBeer.contributed_by}</p>
            <hr></hr>
            </div>
  
        </div>
        )
      })}
     </div>   
    </div>
                     
    )
}

export default AllBeers