
import './estiloheader.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
    <header>
        <Link to="/" className='headerText'>home</Link>
        <Link to="/treino" className='headerText'>Treinos</Link>
    </header>
    )
}


export default Header;