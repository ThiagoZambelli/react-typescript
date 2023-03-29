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
        <h2> Estudos do dia</h2>
        <ul>
            {tarefas.map((tarefa) => (
                <li key={tarefa.id} className={style.item}>
                    <h3>{tarefa.tarefa}</h3>
                    <span>{tarefa.tempo}</span>
                </li>
            ))}            
        </ul>
    </aside>
  )
}

export default Lista;