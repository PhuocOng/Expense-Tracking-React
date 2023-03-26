import {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import "./FourExpenses.css"
import Card from '../Shell/Card'  //.. to go back one folder
import ExpensesFilter from './ExpensesFilter';



function FourExpenses(props) {
    const [filtedYear, setFiltedYear] = useState('2023');

    const saveSelectedYearHandler = (selectedYear) => {
        console.log("selected Year in ExpenseFilter -> Go to FourExpense is: " + selectedYear)
        setFiltedYear(selectedYear);   //Set the default value of filted Year is 2023
    }   //Function to run inside "ExpenseFilter.js" to get the object event value of <select>
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filtedYear={filtedYear} onSaveSelectedYear={saveSelectedYearHandler} />
                {props.expenses.map((expense) => (
                    <ExpenseItem
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                    />
                ))}   {/*Loop through the expenses array, then map each element in that array into <ExpenseItem></ExpenseItem>*/}
            </Card>
        </div>
    )
}

export default FourExpenses