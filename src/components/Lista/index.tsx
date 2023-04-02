
import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.css'


interface ILista{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa }:ILista) {    

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        {...tarefa}
                        key={tarefa.id}
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