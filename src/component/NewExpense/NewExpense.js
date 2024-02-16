import React,{useState} from "react";
import './NewExpense.css'
function NewExpense( props){
    const [newtitle,setNewTitle]=useState('');
const titleChanger=(event)=>{
setNewTitle(event.target.value);
}
const [newamount,setNewAmount]=useState('');
const amountChanger=(event)=>{
    setNewAmount(event.target.value);
}
const [newdate,setNewDate]=useState('');
const dateChanger=(event)=>{
    setNewDate(event.target.value);
}

const submited=(event)=>{
event.preventDefault();
const newExpense={
    title:newtitle,
    amount:newamount,
    date: new Date(newdate)
}
props.onNewSubmission(newExpense);
setNewAmount('');
setNewDate('');
setNewTitle('');
}

return <div className="expense-form">
    <form onSubmit={submited} className="expense-form">
    <div className="expense-form_input">
        <label>Title</label>
        <input type='text' value={newtitle} onChange={titleChanger}/>
    </div>
    <div className="expense-form_input">
        <label>Amount</label>
        <input type='number' value={newamount} onChange={amountChanger}/>
    </div>
    <div className="expense-form_input">
        <label>Date</label>
        <input type='date' value={newdate} onChange={dateChanger}/>
        </div>
        <button type="submit" >Add Expense</button>
    </form>
    </div>
}
export default NewExpense