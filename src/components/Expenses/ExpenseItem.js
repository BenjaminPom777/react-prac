import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    // setTimeout(()=>{
    //     setTitle('Timeout')
    // },5000)

    // console.log('top', title)
    // console.log('called again')

    const clickHandler = () => {
        setTitle('Updated')
        console.log('bottom', title)
        
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler} >change title</button>
        </Card>
    );
}


export default ExpenseItem;