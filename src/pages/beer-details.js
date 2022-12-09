import HomeImg from '../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png'
import { useParams,NavLink } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'





function BeerDetails (){

    const {id} = useParams()

    const [beer, setBeer] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            setBeer(axiosResponse.data)
        })
        .catch(err => console.log(err))
    }, [])


    return (

       <div>
       
       <NavLink to="/">
            <img src={HomeImg}/>
        </NavLink>


        <div className="BeerList">
     { beer ? ( <div className="single"  key={beer._id}>
            <h1>{beer.name}</h1>
            <img className="Img" src={beer.image_url} alt=""/>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
            <hr></hr>
            </div>
        
    ) : <p>loading</p>}
      </div>   
     </div>
    )
}
    
export default BeerDetails