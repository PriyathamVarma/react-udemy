// this component conatins all mian elements
import Events from './components/Events';
import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';   
import Header from './Header';
import Footer from './Footer';


const Main = () => {
  const propsToChildren = "props sending to children";

  const data = [
    {name:'Event1', price:20,   date:'2020-09-12'},
    {name:'Event2', price:2000, date:'2020-09-12'},
    {name:'Event3', price:200,  date:'2020-09-12'}

  ];

 return(
    <div>

<div className="App">
  
  <Header />

<div className="container">

  <div className={false ? 'sidebar-close' : 'sidebar'}>
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

              {data.map((item,index) => (
                <Events 
                key={index}
                name={item.name}
                price={item.price}
                date={item.date}
                />
              ))}


            
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


<Footer/>

</div>

</div>
    
    
  );
}

export default Main;
