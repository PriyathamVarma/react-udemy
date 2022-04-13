
// Events component
import './Events.css';
import { useState } from 'react';
import {ethers} from 'ethers';

const Events = (props) => {
    const dummyData = 'Location not decided';

    const selected = false;

    //sample of state use
    const[name,setName] = useState(props.name);
    const[slct,setSlct] = useState(selected);

    // button clicked function
    const btnClicked = () =>{

        if(slct === false){

            setSlct(true);

        }
        else{
            setSlct(false);
        }

        

    }
    
  return (
      
    <div className={slct ? 'Card2':'Card'}>

        <div>
           <h1> EVENT: <span> {name.toLowerCase()} </span>  </h1>
           <h3>{slct ? 'Selected':'Not Selected'}</h3>
        </div>

        <div>

            <p>${props.price} </p>
            <p> {dummyData} </p>
            <button className="btn" onClick={() => {alert(props.name + 'is not available to book now')}}>Book Now</button>

            <button className="btn2" onClick={btnClicked}>Select</button>

        </div>
     
    </div>
  );
}

export default Events;