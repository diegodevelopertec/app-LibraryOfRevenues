import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Registro=()=>{
const navigate=useNavigate()

const clickFormSubmit=()=>{
navigate('/login')
}


    return <>
   <S.ContainerRegistro>
        <S.Container>
          <S.ContainerDivision>
          <div className="cx-form">
              <S.Form >
                <h3>Cadastrar</h3>
                <p>Preencha com seus dados para ir para o Login  : </p>
                <div className="cx-inputs">
                    <input type="text" placeholder='Digite seu nome'/>
                    <input type="email" placeholder='Digite seu email'/>
                    <input type="password" placeholder='Digite uma senha' />
                  <input type="submit" className='submit' value='criar conta' onClick={clickFormSubmit}/>
                </div>



              </S.Form>
           </div>
           <div className="cx-image">
               <img src={cozinheiraImage} alt="" />
           </div>
          </S.ContainerDivision>
        </S.Container>

    </S.ContainerRegistro>
  
    
    
    </>
}