import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const selectChangeHandler = (event) => {
        console.log("The year in <select> in ExpenseFilter is: " + event.target.value);   //Still in Expense Filter
        props.onSaveSelectedYear(event.target.value);    //Pass event.target.value of <select> into <FourExpense>
    }
    return (  //onChange the object event of <select> 
        <div className='expenses-filter'>  
            <div className='expenses-filter__control'>    
                <label>Filter by year</label>  
                <select value={props.filtedYear} onChange={selectChangeHandler}> 
                    <option value='2023'>2023</option>          
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;