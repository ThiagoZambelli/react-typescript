import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import styles from './App.module.css';
import Cronometro from './components/Cronometro';
import { ITarefa } from './types/tarefas';


function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(antigas => antigas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={styles.app}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
