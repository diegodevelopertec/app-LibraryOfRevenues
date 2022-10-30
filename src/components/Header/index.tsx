import * as S from './style'
import {Link} from 'react-router-dom'
import MenuIcon from '../../assets/icons/menuHamburguer.png'
import { useState } from 'react'





export const Header=()=>{

    const [MenuMobile,setMenuMobile]=useState(false)
    const [logged,setIslogged]=useState(true)

    const clickMobile=()=>{
        !MenuMobile ? setMenuMobile(true) : setMenuMobile(false)
    }
    const clickLink=()=>{
        !MenuMobile ? setMenuMobile(true) : setMenuMobile(false)
    }



    return <S.Containerheader visible={MenuMobile}>
        <div className='logo'>
            <Link to='/'> ReceitasOn </Link>
        </div>
        <div className="navbar">
    
            <button className='btn-mobile' onClick={clickMobile} >
                    <img src={MenuIcon} className='img-mobile' alt="" />
                </button>
                
                <div className="nav">
                    {logged && <>
                        <Link to='/receitas' onClick={clickLink}>Receitas</Link>
                       <Link  to='/receitas/addreceita'  onClick={clickLink} >Criar receita</Link>
                       <Link to='/conta' onClick={clickLink}> Minha Conta</Link>
                    
                    </>}
                    {!logged && <>
                        <Link to='/login' onClick={clickLink}>Login</Link>
                        <Link to='/registro' onClick={clickLink}>Registro</Link>
                      
                    </>}
                </div>
        </div>

    
    </S.Containerheader>
}