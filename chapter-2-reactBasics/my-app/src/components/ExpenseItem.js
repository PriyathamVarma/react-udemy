
// ExpenseItem component

import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const dummyData = 'Location not decided';

    //sample of state use
    const[name,setName] = useState(props.name);

    // button clicked function
    const btnClicked = () =>{
        console.log("Button clicked which triggered btnClicked");
    }
    
  return (
      
    <div className="Card">

        <div>
           <h1> EVENT: <span> {name.toLowerCase()} </span>  </h1>
        </div>

        <div>

            <p>${props.price} </p>
            <p> {dummyData} </p>
            <button className="btn" onClick={() => {alert(props.name + 'is not available to book now')}}>Book Now</button>

            <button className="btn2" onClick={btnClicked}>State button</button>

        </div>
     
    </div>
  );
}

export default ExpenseItem;