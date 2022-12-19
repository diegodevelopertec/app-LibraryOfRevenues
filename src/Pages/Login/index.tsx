import { ChangeEventHandler, useState } from 'react'
import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'
import { Link,useNavigate } from 'react-router-dom'
import { ChangeEvent } from 'react'
import { ErrorMensage } from '../../components/ErrorMensage/index'
import { useForm, SubmitHandler } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


type InputsType = {
    email: string,
    password: string,
  };

export const Login=()=>{

    let [errorDisplay,setErrorDisplay]=useState(false)
    const navigate=useNavigate()


    const schema=yup.object({
        email:yup.string().email().required(),
        password:yup.string().required()
    }).required()

    const {register,handleSubmit,formState:{errors}}=useForm<InputsType>({
      resolver:yupResolver(schema)
    })



  


    const clickSubmit=(e:any)=>{
        e.preventDefault()
      
       
    }



    return <>
    <S.ContainerLogin>
        <S.Container>
          <S.ContainerDivision>
          <div className="cx-form">
              <S.Form onSubmit={handleSubmit(clickSubmit)}  >
                <h3>Login</h3>
                <p>Preencha com seus dados para entrar : </p>
                <div className="cx-inputs">
                    <input type="email" 
                       placeholder='Digite seu Email' 
                       {...register("email")} 
                      
                    />
                    <p className='msg-error'>{errors.email?.message}</p>
                    <input type="password" 
                        placeholder='Digite sua senha' 
                        {...register("password")}
                     
                    />
                      <p className='msg-error'>{errors.password?.message}</p>
                    <input type="submit" 
                      className='submit' 
                        value={'Entrar'} 
                      
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