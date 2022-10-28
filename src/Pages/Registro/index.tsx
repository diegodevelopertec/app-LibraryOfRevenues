import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'

export const Registro=()=>{
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
                    <input type="submit" className='submit' value='criar conta' />
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