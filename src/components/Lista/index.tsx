
import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.css'




function Lista({tarefas}:{tarefas: ITarefa[]}) {    

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        {...tarefa}
                    // id={tarefa.id}
                    // tarefa={tarefa.tarefa}
                    // tempo={tarefa.tempo} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;