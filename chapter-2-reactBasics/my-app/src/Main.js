// this component conatins all mian elements
import Events from './components/Events';
import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';   


const Main = () => {
  const propsToChildren = "props sending to children";

  //state for the selected event
    const [selected,setSelected] = useState(false);

  const data = [
    {name:'Event1', price:20,   date:'2020-09-12'},
    {name:'Event2', price:2000, date:'2020-09-12'},
    {name:'Event3', price:200,  date:'2020-09-12'}

  ];

  //function for the button clicked
    const navBarBtnclicked = () =>{
        setSelected(!selected);
    }

 return(
    <div>

<div className="App">

<div className="Header">
  <h1>React application demo for booking system</h1>
  <button onClick={navBarBtnclicked} className='navBarBtn'>{String.fromCodePoint(parseInt(2192,16))}</button>
</div>



<div className="container">

  <div className={selected ? 'sidebar-close' : 'sidebar'}>
      <h1>Sidebar</h1>

        <ul>

            <li><Link className="Link" to="/">Home</Link></li>
            <li><Link className="Link" to="/allevents">All Events</Link></li>
            <li><Link className="Link" to="/attendedevents">Attended Events</Link></li>
            <li><Link className="Link" to="/favevents">Favorite Events</Link></li>

        </ul>

    </div>

    <div className="side-container">

          {/* Events components */}
          <div className="aside">

              <h1>Events</h1>

              <Events 
                name={data[0].name}
                price ={data[0].price}
                date={data[0].date} />

              <Events 
                name={data[1].name}
                price ={data[1].price}
                date={data[1].date} />

              <Events 
                name={data[2].name}
                price ={data[2].price}
                date={data[2].date} />

              <Events 
                name={data[2].name}
                price ={data[2].price}
                date={data[2].date} />

              <Events 
                name={data[2].name}
                price ={data[2].price}
                date={data[2].date} />


            
          </div>{/* Events components */}

          {/* Meetings components */}
          <div className="aside">

          <h1>Meetings</h1>

              <Events 
                name={data[0].name}
                price ={data[0].price}
                date={data[0].date} />

              <Events 
                name={data[1].name}
                price ={data[1].price}
                date={data[1].date} />

              <Events 
                name={data[2].name}
                price ={data[2].price}
                date={data[2].date} />

            
          </div>{/* Meetings components Ends*/}

          {/* Classses components */}
          <div className="aside">

          <h1>Classes</h1>

              <Events 
                name={data[0].name}
                price ={data[0].price}
                date={data[0].date} />

              <Events 
                name={data[1].name}
                price ={data[1].price}
                date={data[1].date} />

              <Events 
                name={data[2].name}
                price ={data[2].price}
                date={data[2].date} />

            
          </div>{/* classes components ends */}

    </div>


</div>


<div className="Footer">
  <h1>Footer section</h1>
</div>
</div>

</div>
    
    
  );
}

export default Main;
