import './estiloProt.css'
import {useState} from 'react'

export default function Prot(){

    const [peso, setPeso] = useState('') 
    const [resultado, setResultado] = useState('')

    function Calc(e){
        e.preventDefault()
        const calculo = (peso*2)
        return(
            setResultado(`${calculo} gramas`)
        )
    }

    return(
        <div className="container">
            <h1 className="calc">Calculo de proteína diária para hipertrofia</h1>
            <br/>
            <form onSubmit={Calc}>
                <label name="peso">Peso</label>
                <input value={peso} onChange={(e)=>{setPeso(e.target.value)}}
                name="peso"type="number"/>
                <button type="submit">Calcular</button>
            </form>
            <h3 className="calc">{`Resultado: ${resultado} `}</h3>
        </div>
    )
}