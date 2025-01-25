import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Recetas from './pages/Recetas';
import About from './pages/Nosotros';
import { Toaster } from 'react-hot-toast'
import Navbar from './componentes/navbar';
import NewReceta from './pages/NewReceta';

function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Recetas" element={<Recetas/>}/>
                    <Route path="/NewReceta" element={<NewReceta/>}/>
                </Routes>
                <Toaster/>
            </BrowserRouter>
        </div>  
    )
  }

export default App