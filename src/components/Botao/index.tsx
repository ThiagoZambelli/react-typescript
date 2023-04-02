import React from 'react';
import styles from './Botao.module.css'

class Botao extends React.Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }>{
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button type={type} className={styles.botao} onClick={onClick}>
                {this.props.texto}
            </button>
        )
    }
}


export default Botao;