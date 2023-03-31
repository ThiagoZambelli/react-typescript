import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import styles from './App.module.css';
import Cronometro from './components/Cronometro';
import { ITarefa } from './types/tarefas';


function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  return (
    <div className={styles.app}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
