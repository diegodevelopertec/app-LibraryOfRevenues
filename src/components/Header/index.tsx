import * as S from './style'
import {Link} from 'react-router-dom'
import MenuIcon from '../../assets/icons/menuHamburguer.png'
import { useEffect, useState } from 'react'





export const Header=()=>{

    const [MenuMobile,setMenuMobile]=useState(false)


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
                    <Link to='/' onClick={clickLink}>Menu</Link>
                    <Link to='/' onClick={clickLink}>inicio</Link>
                    <Link to='/' onClick={clickLink}>Meio</Link>
                </div>
        </div>

    
    </S.Containerheader>
}