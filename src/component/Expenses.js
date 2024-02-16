import React,{useState} from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import ExpenseChart from './ExpenseChart';
//import Card from './Card';

 function Expenses(props){
  const [displayyear,setDisplayYear]=useState('2023');
  const YearSelection=(selectedyear)=>{
    setDisplayYear(selectedyear);
  }
  const filteredExpenses= props.items.filter((expenses)=> {return expenses.date.getFullYear().toString()===displayyear});
  
  let expensecontent=filteredExpenses.map(x=><ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date}></ExpenseItem>);
  if (filteredExpenses.length===0){
     expensecontent=<p>No expenses</p>;
  }
  
    return <div className='expenses'>
      <ExpenseFilter selected={displayyear} onYearSelection={YearSelection}></ExpenseFilter>
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      {expensecontent}
      </div>

}
export default Expenses;