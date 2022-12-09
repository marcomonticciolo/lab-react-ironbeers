import { NavLink } from "react-router-dom";
import HomeImg from '../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png'
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";



function NewBeer (){

    const navigate = useNavigate()

    const [state,setState] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",


    })

    const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: state.name,
        tagline: state.tagline,
        description: state.description,
        first_brewed: state.first_brewed,
        brewers_tips: state.brewers_tips,
        attenuation_level: Number(state.attenuation_level),
        contributed_by: state.contributed_by

    })
    .then(axiosResponse => {
        navigate("/beers")
    })
    .catch(err => console.log(err))
    }
    


    return (

        <div>

     <div>
        <NavLink to="/">
        <img src={HomeImg}/>
       </NavLink>
 </div>

 <h1>Create a new Beer</h1>

        
        <form onSubmit={handleSubmit}>
        
        <div className="Form">
            <label >Name</label>
            <input className="Box1" name='name' value={state.name} onChange={updateState}/>
            <label >Tagline</label>
            <input  name='tagline' value={state.tagline} onChange={updateState}/>
            <label >Description</label>
            <input name='description' value={state.description} onChange={updateState}/>
            <label >First Brewed</label>
            <input name='first_brewed' value={state.first_brewed} onChange={updateState}/>
            <label >Brewers Tips</label>
            <input name='brewers_tips' value={state.brewers_tips} onChange={updateState}/>
            <label >Atenuation Level</label>
            <input name='attenuation_level' value={state.attenuation_level} onChange={updateState}/>
            <label>Contributed By</label>
            <input name='contributed_by' value={state.contributed_by} onChange={updateState}/>
           
            <button>Create Apartment</button>
         </div>


            </form>

 </div>
        
    )
}

export default NewBeer