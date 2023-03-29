import React from 'react'

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
    <aside>
        <h2> Estudos do dia</h2>
        <ul>
            {tarefas.map((tarefa) => (
                <li key={tarefa.id}>
                    <h3>{tarefa.tarefa}</h3>
                    <span>{tarefa.tempo}</span>
                </li>
            ))}            
        </ul>
    </aside>
  )
}

export default Lista;