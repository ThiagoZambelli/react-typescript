import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './Cronometro.module.css'
import { ITarefa } from "../../types/tarefas"
import { useState } from "react"
import { conversaoParaSegundos } from "../../common/utils/time"

interface ICronometro{

    selecionado: ITarefa | undefined
}

function Cronometro({selecionado}:ICronometro) {

    const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo) {
        setTempo(conversaoParaSegundos(selecionado.tempo))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto="Iniciar" />
        </div>

    )
}

export default Cronometro