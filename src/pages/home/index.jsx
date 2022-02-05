import Folder from './gympass1.jpg'
import imagemImc from './imc.jpg'
import Proteina from './proteina.jpg'
import './estilohome.css'
import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <div>
        <h1> Sua Evolução</h1>
        <img src={Folder}/>
        <br/>
        <h3>Classificação de IMC</h3>
        <br/>
        <img src={imagemImc}/>
        <Link to={'/calcImc/'} className='calc'>Clique para calcular IMC</Link>
        <br/>
        <h3>Alimentação Direcionada</h3>
        <br/>
        <img src={Proteina}/>
        <Link to={'/calcProt/'} className='calc'>Clique para calcular proteínas diárias</Link>

        
        </div>
    )
}