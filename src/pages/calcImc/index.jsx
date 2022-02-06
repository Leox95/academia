import {useState} from 'react'
import './estiloImc.css'


export default function IMC(){
    
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [resultado, setResultado] = useState('')
    
    function CalcImC(event){
        event.preventDefault()
        const res = (peso/(altura*altura))
        
        return(
             setResultado(res.toFixed(2))
        
        )
    }

    return(
        <div className='container'>
        <h1 className="calc">Calculadora de IMC</h1>
        <br/>
        <form onSubmit={CalcImC}>
            <label name='peso'>Insira seu peso</label>
            <input value={peso} onChange={(e)=>{setPeso(e.target.value)}}
             name='peso'type='number' />
            <label name='altura'>Insira sua Altura</label>
            <input value={altura} onChange={(e)=>{setAltura(e.target.value)}}
            name='altura'type='number'/>
            <button type='submit'>Calcular</button>
        </form>
        <h3 className='calc'>{`Resultado: ${resultado}`}</h3>
        </div>
    )
}