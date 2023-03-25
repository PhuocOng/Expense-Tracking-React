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
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
            </Card>
        </div>
    )
}

export default FourExpenses