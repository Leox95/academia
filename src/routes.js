import { BrowserRouter, Route, Routes }  from "react-router-dom";
import Home from './pages/home'
import Header from "./component/header";
import Treino from './pages/treino'
import IMC from "./pages/calcImc";
import Prot from "./pages/calcProt";
import NaoEncontrada from "./pages/notFound";

const Rotas = ()=> {
    return(
      
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/treinos" element={<Treino/>}></Route>
                <Route exact path="/calcImc" element={<IMC/>}></Route>
                <Route exact path="/calcProt" element={<Prot/>}></Route>
                <Route path="*" element={<NaoEncontrada/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;