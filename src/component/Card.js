import './Card.css';

export default function Card(props){
    const c='card'+props.className
    return <div className={c}>{props.children}</div>
}