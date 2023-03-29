import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let newExpense = props.items.filter((item) => ( //convert props.item array into newExpense array with filter is YEAR 
    item.date.getFullYear().toString() === filteredYear
  ));

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items = {newExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
