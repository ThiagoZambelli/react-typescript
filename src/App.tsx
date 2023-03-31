import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import styles from './App.module.css';
import Cronometro from './components/Cronometro';


function App() {
  return (
    <div className={styles.app}>
     <Formulario />
     <Lista />
     <Cronometro />
    </div>
  );
}

export default App;
