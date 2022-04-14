import './EventsPage.css';

const SingleEvent = ({name, price, date}) => {
    return (
        <div className="single-event">
        <h1>Event: {name}</h1>
        <p>$ {price}</p>
        <p>Date:{date}</p>
        </div>
    );
    }


export default SingleEvent;