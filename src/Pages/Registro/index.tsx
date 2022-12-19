import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChangeEvent } from 'react'
import { ErrorMensage } from '../../components/ErrorMensage'
import { useForm, SubmitHandler } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


type InputsType = {
  name: string,
  email: string,
  password: string,
};

export const Registro=()=>{
  let [nameUser,setNameUser]=useState('')
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let [errorDisplay,setErrorDisplay]=useState(false)


    const schema=yup.object({
      name:yup.string().required(),
      email:yup.string().email().required(),
      password:yup.string().required()
    }).required()

    const {register,handleSubmit,formState:{errors}}=useForm<InputsType>({
    resolver:yupResolver(schema)
    })



const SubmitForm=(data:InputsType)=>{

}



    return <>
   <S.ContainerRegistro>
        <S.Container>
          <S.ContainerDivision>
          <div className="cx-form">
              <S.Form onSubmit={handleSubmit(SubmitForm)}>
                <h3>Cadastrar</h3>
                <p>Preencha com seus dados para ir para o Login  : </p>
                <div className="cx-inputs">
                    <input 
                      type="text" 
                      placeholder='Digite seu nome'
                     {...register('name')}

                    />
                       <p className='msg-error'>{errors.name?.message}</p>
                    <input 
                       type="email" 
                       placeholder='Digite seu email'
                       {...register('email')}
                    />
                       <p className='msg-error'>{errors.email?.message}</p>
                    <input 
                        type="password" 
                        placeholder='Digite uma senha'
                        {...register('password')}
                     />
                        <p className='msg-error'>{errors.password?.message}</p>
                  <input type="submit" className='submit' value='criar conta' />
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