import React from 'react';   //just add for fun but not neccesary 
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //take the latest enteredExpenseData object
            id: Math.random().toString()  // override/add the "id" property into enteredExpenseData object
        };
        props.onSaveData(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;