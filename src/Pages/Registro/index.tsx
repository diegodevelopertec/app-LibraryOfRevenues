import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChangeEvent } from 'react'
import { ErrorMensage } from '../../components/ErrorMensage'

export const Registro=()=>{
  let [nameUser,setNameUser]=useState('')
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let [errorDisplay,setErrorDisplay]=useState(false)

const navigate=useNavigate()

const actionsForm={
  changeNameUser:(e:ChangeEvent<HTMLInputElement>)=>{
    setNameUser(e.target.value)
    setErrorDisplay(false)
},
  changeEmail:(e:ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value)
      setErrorDisplay(false)
  },
  changePassword:(e:ChangeEvent<HTMLInputElement>)=>{
      setPassword(e.target.value)
      setErrorDisplay(false)
  }

}

const clickSubmit=(e:any)=>{
  e.preventDefault()
  if(email ==='' && password == ''){
      setErrorDisplay(true)
      
  }else{
      navigate('/login')
      setErrorDisplay(false)
  }
 
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
                    <input 
                      type="text" 
                      placeholder='Digite seu nome'
                      value={nameUser} 
                      onChange={actionsForm.changeNameUser}

                    />
                    <input 
                       type="email" 
                       placeholder='Digite seu email'
                       value={email} 
                       onChange={actionsForm.changeEmail}
                    />
                    <input 
                        type="password" 
                        placeholder='Digite uma senha'
                        value={password} 
                        onChange={actionsForm.changePassword} 
                     />
                  <input type="submit" className='submit' value='criar conta' onClick={clickSubmit}/>
                </div>
                {errorDisplay &&  <ErrorMensage  text='Todos os campos devem ser preenchidos'/> }



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