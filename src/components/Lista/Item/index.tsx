import { ITarefa } from '../../../types/tarefas'
import style from './Item.module.css'

function Item({tarefa, tempo, selecionado, completado, id}:ITarefa) {
    
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item