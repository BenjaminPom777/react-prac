import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
    
        console.log(expenseData)
        props.onAddExpense(expenseData)
        // enteredExpenseData.enteredTitle='hahahah';
        // console.log('enteredExpenseData: ', enteredExpenseData)
    }



    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
}


export default NewExpense;