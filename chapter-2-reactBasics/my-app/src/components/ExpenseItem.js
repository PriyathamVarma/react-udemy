// ExpenseItem component

const ExpenseItem = (props) => {
    const dummyData = 'Varma';
    
  return (
      
    <div className="App">
        <div>
           <h1> {props.date} </h1>
        </div>
        <div>
        <h2> {props.name} </h2>
        <p> $ {props.amount} </p>
        <p>{1+1}</p>
        <p>{dummyData}</p>
        </div>
     
    </div>
  );
}

export default ExpenseItem;
