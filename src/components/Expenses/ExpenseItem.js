import { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../Shell/Card'  //.. to go back one folder


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated");      
        console.log(title);
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        <button onClick={clickHandler}>Changed Title</button>
        </Card>

    );
}

export default ExpenseItem; //Export to use this function in other files.
