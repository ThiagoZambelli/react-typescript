import React from 'react';
import styles from './Botao.module.css'

class Botao extends React.Component<{texto:string}>{
    render() {
        return(
            <button className={styles.botao}>
                {this.props.texto}
            </button>
        )
    }
}


export default Botao;