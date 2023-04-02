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
  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(antigas => antigas.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={styles.app}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado} 
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
