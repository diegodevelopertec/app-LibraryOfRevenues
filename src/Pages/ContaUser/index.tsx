import * as S from "./style"
import Perfil from './../../assets/imgs/perfil.jpg'
import listIcon from './../../assets/icons/list.png'
import configIcon from './../../assets/icons/config.png'
import editIcon from './../../assets/icons/lapis.png'
import { useState } from "react"



export const ContaUser=()=>{
    const [inputDisable,setInputDisable]=useState(true)


 const clickAlterarData=()=>{
       inputDisable  ? setInputDisable(false) : setInputDisable(true)
       
 }

return <S.Container>
    <div className="container-conta">
        <div className="cx-img">
            <img src={Perfil} alt="" />
        </div>
        <div className="cx-inputs">
           
            <div>
                <input type="text" defaultValue={'Diego'} disabled={inputDisable} />
            </div>
            <div>
                <input type="email" defaultValue={'diego@gmail.com'} disabled={inputDisable} />
            </div>
            <div>
                <input type="password" defaultValue={'ssssss'} disabled={inputDisable} />
            </div>
            <button onClick={clickAlterarData}>
                 {inputDisable  ? ' alterar' : 'salvar'}
            
            </button>
        
        </div>
    </div>

</S.Container>
}