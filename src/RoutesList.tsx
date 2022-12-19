import {Routes,Route} from 'react-router-dom'
import { Home } from "./Pages/Home";
import { Receita } from './Pages/Receita';
import { ListReceitas } from './Pages/ListReceitas';
import { Login } from './Pages/Login';
import { Registro } from './Pages/Registro';
import { PageError } from './components/PageError';
import { AddReceita } from './Pages/AddReceita';
import { ContaUser } from './Pages/ContaUser';
import {UserReceitas} from './Pages/UserReceitas'

export const RoutesList=()=>{
    return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/receitas' element={<ListReceitas/>} />
        <Route path='/receitas/:id' element={<Receita/>} />
        <Route path='/receitas/user/:id' element={<Receita/>} />
        <Route path='/addreceita' element={<AddReceita/>} />
        <Route path='/myreceitas' element={<UserReceitas/>} />
        <Route path='/myconta' element={<ContaUser/>} />
        <Route  path='*' element={<PageError />}/>
    </Routes>
}