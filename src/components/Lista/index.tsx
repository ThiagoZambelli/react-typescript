import Item from './Item';
import style from './Lista.module.css'

function Lista() {
    const tarefas = [
        {
        id: 1,
        tarefa: 'React',
        tempo: "02:00:00"
    },{
        id: 2,
        tarefa: 'JavaScript',
        tempo: "01:00:00"
    },{
        id: 3,
        tarefa: 'TypeScript',
        tempo: "03:00:00"
    }
]
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