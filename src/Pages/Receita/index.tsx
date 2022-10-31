import * as S from './styled'
import { Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export const Receita=()=>{
    const [routeUser,setRouteUser]=useState(true)
    const location=useLocation()


  const receitaUser=location.pathname
  if(receitaUser !== '/receitas/:id'){
      setRouteUser(false)
  }

    return <S.Container>
            <div className="container-form">

          <S.Form>
            <div className="cx-inputs">
                <input type="text" placeholder='Digite o Titulo da Receita' />
                <input type="text"  placeholder='Digite uma breve descrição' />
                <div className="input-file">
                    <input type="file" name="" id="" accept="image/png, image/jpeg" />
                </div>
                <textarea name="" id="" placeholder='Escreva a sua receita aqui ...'></textarea>
            </div>
            <div className="cx-btns">
              {routeUser ?  <>
                    <Link to=''  className='btn-cancel'>cancelar</Link>
                    <Link to='/receitas' type='submit' className='btn-save'>salvar</Link>
                </>
               :
               <Link to='/receitas/user/:id'  type='submit' className='btn-save'>editar</Link>
              
              }
            </div>



          </S.Form>
        </div>




    </S.Container>
}