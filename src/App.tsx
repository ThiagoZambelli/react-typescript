import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.app}>
     <Formulario />
     <Lista />
    </div>
  );
}

export default App;
