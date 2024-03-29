import React from "react";
import './ExpenseFilter.css';

export default function ExpenseFilter(props){
    const selectHandler=(event)=>{
        props.onYearSelection(event.target.value);
    }
    return <div className="expense-filter"> 
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectHandler}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
    </div>
}