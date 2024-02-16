import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

//import Card from './Card';
function ExpenseItem(props){

    //let [title,setTitle]=useState(props.title);
    //const change=()=>{
    //    setTitle(1);}
    return <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>₹{props.amount}</div>
          {/*<button onClick={change}>change</button>*/}
        </div>
    </div>
}

export default ExpenseItem