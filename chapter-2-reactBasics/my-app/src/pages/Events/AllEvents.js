// All events component
import './EventsPage.css';
import '../../App.css';
import SingleEvent from "./SingleEvent";
import Header from '../../Header';
import Footer from '../../Footer';

const Allevents = () => {

  const data = [
    {id:1,name: "Event 1", price: "100", date: "01/01/2020"},
    {id:2,name: "Event 2", price: "200", date: "02/01/2020"},
    {id:3,name: "Event 3", price: "300", date: "03/01/2020"},
    {id:4,name: "Event 4", price: "400", date: "04/01/2020"},
    {id:5,name: "Event 5", price: "500", date: "05/01/2020"},
    {id:6,name: "Event 6", price: "600", date: "06/01/2020"},
    {id:7,name: "Event 7", price: "700", date: "07/01/2020"},
    {id:8,name: "Event 6", price: "600", date: "06/01/2020"},
  ];

  return (
    <div className="App">

      <Header />

      <h1>All Events</h1>

      <div className="container">       

            {data.map((item,index) => (
              <SingleEvent
                key={index}
                name={item.name}
                price={item.price}
                date={item.date}
              />
            ))}

      </div>

      <Footer />

    </div>
  );
} 


export default Allevents;