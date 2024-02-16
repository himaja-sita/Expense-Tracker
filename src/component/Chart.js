import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

export default function Chart(props){
    const datpointvalues=props.datapoints.map(datapoint=>datapoint.value);
const totalmaximum=Math.max(...datpointvalues);
return <div className="chart">
{props.datapoints.map(datapoint=> <ChartBar
key={datapoint.label} value={datapoint.value} label={datapoint.label} maxvalue={totalmaximum}></ChartBar>)}
</div>
}