import {Routes,Route} from 'react-router-dom'
import { Home } from "./Pages/Home";
import { Receita } from './Pages/Receita';
import { Receitas } from './Pages/Receitas';
import { Login } from './Pages/Login';
import { Registro } from './Pages/Registro';
import { PageError } from './components/PageError';


export const RoutesList=()=>{
    return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/receitas' element={<Receitas/>} />
        <Route path='/receitas/:id' element={<Receita/>} />
        <Route  path='*' element={<PageError />}/>
    </Routes>
}