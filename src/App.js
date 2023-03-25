import FourExpenses from './components/Expenses/FourExpenses';   //Only import what we use
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2023, 2, 26) },
    { title: 'New TV', amount: 799.49, date: new Date(2022, 5, 13) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2020, 12, 21) },
    { title: 'New Desk (Wooden)', amount: 450, date: new Date(2019, 7, 30) }
  ]

  const saveDataHandler = (data) => {
    console.log("In App.js");
    console.log(data);
  };
  return (
    <div>
      <NewExpense onSaveData={saveDataHandler} />
      <FourExpenses expenses={expenses} />
    </div>
  );
}

export default App;
