import './estiloTreino.css'
import { useState, useEffect } from 'react'

export default function Treino() {

    const [tempo, setTempo] = useState(0)
    const [liga, setLiga] = useState(false)
    const [peito, setPeito] = useState(0)
    const [triceps, setTriceps] = useState(0)
    const [biceps, setBiceps] = useState(0)
    const [costas, setCostas] = useState(0)
    const [ombro, setOmbro] = useState(0)
    const [perna, setPerna] = useState(0)

    useEffect(() => {

        var interval = null
        if (liga) {
            interval = setInterval(() => {
                setTempo(prevTime => prevTime + 1000)
            }, 1000)

        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [liga])

    return (
        <div className="containerTreino">
            <h1 className='grupoMuscular'>Cronômetro</h1>
            <div className="containerTempo">
                <a className="tempo">{('0' + Math.floor((tempo / 60000) % 60)).slice(-2)}:</a>
                <a className="tempo">{('0' + Math.floor((tempo / 1000) % 60)).slice(-2)}</a>
            </div>
            <div>
                <button onClick={() => setLiga(true)}>Iniciar</button>
                <button onClick={() => setLiga(false)}>Parar</button>
                <button onClick={() => setLiga(true)}>Continuar</button>
                <button onClick={() => setTempo(0)}>Zerar</button>
            </div>
            <br />
            <br />
            <div >
                <h1 className='grupoMuscular'>Treinos de cada músculo</h1>
                <br />
                <div className='containerMembros'>
                    <a className='musculo'>{`Peito: ${peito}`}</a>
                    <div>
                        <button className='menos' onClick={() => setPeito(peito - 1)}>-</button>
                        <button onClick={() => setPeito(peito + 1)}>+</button>
                    </div>
                </div>
                <div className='containerMembros'>
                    <a className='musculo'>{`Triceps: ${triceps}`}</a>
                    <div>
                        <button onClick={() => setTriceps(triceps - 1)}>-</button>
                        <button onClick={() => setTriceps(triceps + 1)}>+</button>
                    </div>
                </div>
                <div className='containerMembros'>
                    <a className='musculo'>{`Biceps: ${biceps}`}</a>
                    <div>
                        <button onClick={() => setBiceps(biceps - 1)}>-</button>
                        <button onClick={() => setBiceps(biceps + 1)}>+</button>
                    </div>
                </div>
                <div className='containerMembros'>
                    <a className='musculo'>{`Costas: ${costas}`}</a>
                    <div>
                        <button onClick={() => setCostas(costas - 1)}>-</button>
                        <button onClick={() => setCostas(costas + 1)}>+</button>
                    </div>
                </div>
                <div className='containerMembros'>
                    <a className='musculo'>{`Ombro: ${ombro}`}</a>
                    <div>
                        <button onClick={() => setOmbro(ombro - 1)}>-</button>
                        <button onClick={() => setOmbro(ombro + 1)}>+</button>
                    </div>
                </div>
                <div className='containerMembros'>
                    <a className='musculo'>{`Perna: ${perna}`}</a>
                    <div>
                        <button onClick={() => setPerna(perna - 1)}>-</button>
                        <button onClick={() => setPerna(perna + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}