// create a header component
import { useState } from 'react'; 
import './App.css'; 

const Header = () => {
      
    //state for the selected event
    const [selected,setSelected] = useState(false);


    //function for the button clicked
    const navBarBtnclicked = () =>{
        setSelected(!selected);
    }


    return(
    <div className="Header" >
        <h1>React application demo for booking system</h1>
        <button onClick={navBarBtnclicked} className='navBarBtn'>{String.fromCodePoint(parseInt(2192,16))}</button>
    </div>
  );
}

export default Header;