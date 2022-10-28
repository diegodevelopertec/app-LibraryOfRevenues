import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'
import { Link } from 'react-router-dom'

export const Login=()=>{
    return <>
    <S.ContainerLogin>
        <S.Container>
          <S.ContainerDivision>
          <div className="cx-form">
              <S.Form >
                <h3>Login</h3>
                <p>Preencha com seus dados para entrar : </p>
                <div className="cx-inputs">
                    <input type="email" placeholder='Digite seu Email' />
                    <input type="password" placeholder='Digite sua senha' />
                    <input type="submit" className='submit' value='Entrar' />
                </div>
                <div className="cx-radio">
                        <p>Não tem conta ?<Link to='/registro' className='link'>clique aqui</Link></p>
                        
                </div>



              </S.Form>
           </div>
           <div className="cx-image">
               <img src={cozinheiraImage} alt="" />
           </div>
          </S.ContainerDivision>
        </S.Container>

    </S.ContainerLogin>
  
    
    
    </>
}