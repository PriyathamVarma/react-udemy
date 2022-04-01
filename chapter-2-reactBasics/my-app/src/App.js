import ExpenseItem from './components/ExpenseItem';
import './App.css';

const App = () => {
  const propsToChildren = "props sending to children";
  const data = [
    {name:'varma',amount:20,date:'2020-09-12'},
    {name:'sneha',amount:2000,date:'2020-09-12'},
    {name:'sweety',amount:200,date:'2020-09-12'}
  ];
  return (
    <div className="App">

      <h1>This is Main App component</h1>

        <hr/>
          <ExpenseItem 
          name={data[0].name}
          amount ={data[0].amount}
          date={data[0].date} />
        <hr/>
        <ExpenseItem 
          name={data[1].name}
          amount ={data[1].amount}
          date={data[1].date} />
        <hr/>
        <ExpenseItem 
          name={data[2].name}
          amount ={data[2].amount}
          date={data[2].date} />

    </div>
  );
}

export default App;
