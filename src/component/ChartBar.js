import './ChartBar.css';
function ChartBar(props){
    let fillcontent='0%';
    if (props.maxvalue>0){
       fillcontent=Math.round((props.value/props.maxvalue)*100)+'%';
    }
    return <div className="chart-bar">
        <div className="chart-bar_inner">
            <div className="chart-bar_fill" style={{height:fillcontent}}></div>
        </div>
        <div>{props.label}</div>
    </div>
}
export default ChartBar;