import React from 'react';
import styles from './Botao.module.css'

class Botao extends React.Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined }>{
    render() {
        const {type= "button" } = this.props;
        return (
            <button type={type} className={styles.botao}>
                {this.props.texto}
            </button>
        )
    }
}


export default Botao;