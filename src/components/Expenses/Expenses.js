import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let newExpense = props.items.filter((item) => ( //convert props.item array into newExpense array with filter is YEAR 
    item.date.getFullYear().toString() === filteredYear
  ));
  
  let showExpense; // Declare the variable outside the if and else if blocks
  if (newExpense.length === 0) {
    showExpense = <p>There is no expense here</p>;
  }  
  else if (newExpense.length>0) {
    showExpense = newExpense.map((expense) => ( //use map to convert newExpense element into <ExpenseItem>
    <ExpenseItem
      id={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {showExpense}
      </Card>
    </div>
  );
};

export default Expenses;
