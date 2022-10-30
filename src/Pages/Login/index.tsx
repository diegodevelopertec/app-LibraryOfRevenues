import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'
import { Link,useNavigate } from 'react-router-dom'
import { ChangeEvent } from 'react'

export const Login=()=>{
    const navigate=useNavigate()
    const clickSubmit=(e:any)=>{
        e.preventDefault()
        navigate('/receitas')


    }
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
                    <input type="submit" className='submit' value='Entrar' onClick={clickSubmit}/>
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