import { ChangeEventHandler, useState } from 'react'
import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'
import { Link,useNavigate } from 'react-router-dom'
import { ChangeEvent } from 'react'
import { ErrorMensage } from '../../components/ErrorMensage/index'



export const Login=()=>{
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [errorDisplay,setErrorDisplay]=useState(false)

    const actionsForm={
        changeEmail:(e:ChangeEvent<HTMLInputElement>)=>{
            setEmail(e.target.value)
            setErrorDisplay(false)
        },
        changePassword:(e:ChangeEvent<HTMLInputElement>)=>{
            setPassword(e.target.value)
            setErrorDisplay(false)
        }
    
    }
    const navigate=useNavigate()
    const clickSubmit=(e:any)=>{
        e.preventDefault()
        if(email ==='' && password == ''){
            setErrorDisplay(true)
            
        }else{
            navigate('/receitas')
            setErrorDisplay(false)
        }
       
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
                    <input type="email" 
                       placeholder='Digite seu Email' 
                       value={email} 
                       onChange={actionsForm.changeEmail} 
                    />
                    <input type="password" 
                        placeholder='Digite sua senha' 
                        name={password} 
                        onChange={actionsForm.changePassword} 
                    />
                    <input type="submit" 
                      className='submit' 
                      value='Entrar' 
                      onClick={clickSubmit}
                    />
                </div>
               {errorDisplay &&  <ErrorMensage  text='Todos os campos devem ser preenchidos'/> }

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