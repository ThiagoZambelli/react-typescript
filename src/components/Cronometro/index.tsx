import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './Cronometro.module.css'
import { ITarefa } from "../../types/tarefas"
import { useEffect, useState } from "react"
import { conversaoParaSegundos } from "../../common/utils/time"

interface ICronometro {

    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

function Cronometro({ selecionado, finalizarTarefa }: ICronometro) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(conversaoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(contador:number=0){
        setTimeout(() =>{
            if(contador > 0){
               setTempo(contador - 1)
               return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000 )
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao
                onClick={() => regressiva(tempo)}
                texto="Iniciar"
            />
        </div>

    )
}

export default Cronometro