import * as S from './style'
import react from 'react'

type PropsMensage={
    text:string,
  
}

export const ErrorMensage=({text}:PropsMensage)=>{
    return <S.Container >
         <div className='cx-error'>
          <p>{text}</p>
        </div>
    </S.Container>



}