import * as S from './style'
import cozinheiraImage from '../../assets/imgs/cozinheiralogin.png'

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
                    <input type="text" />
                    <input type="email" />
                    <input type="password" />
                    <input type="submit" className='submit' value='Entrar' />
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