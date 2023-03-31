import style from './Item.module.css'

function Item({tarefa, id, tempo}:{id:number, tarefa:string, tempo:string }) {
    
    return (
        <li key={id} className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item