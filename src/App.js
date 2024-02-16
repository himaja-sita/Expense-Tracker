import React,{useState} from 'react';
import Expenses from './component/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

const oldexpenses=[
  { id:'e1',
    title: 'Shopping',
    amount: 2000,
    date: new Date(2023,4,16)
  },
  { id:'e2',
    title: 'LIC Insurance',
    amount: 5000,
    date: new Date(2021,0,2)
  },
  { id:'e3',
    title: 'food',
    amount: 2000,
    date: new Date(2020,4,7)
  },
  { id:'e4',
    title: 'Travel',
    amount: 3000,
    date: new Date(2023,4,6)
  }
]
function App() {
  const [expenses,setExpenses]=useState(oldexpenses);
  const NewSubmissionHandler=(newExpenseData)=>{
setExpenses(prevExpenses=>[newExpenseData,...prevExpenses]);
console.log(expenses);
  }
  return (
    <div>
      <NewExpense onNewSubmission={NewSubmissionHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
