import * as S from './style'
import {Receitas} from '../../data/data'
import {Link} from 'react-router-dom'


type Prop={ data:Receitas[]}


export const Card=({data}:Prop)=>{
    return <>
      {data.map((i,k)=>(
            <S.Container  key={k}>
                  <S.ContainerCapa id={i.id} backgroundImage={i.image}>
                     <div className="image" > </div>
                  </S.ContainerCapa>
               
                  <S.ContainerDesc>
                     <p className='namecard'>{i.name}</p>
                     <p>{i.desc}</p>
                  </S.ContainerDesc>

                  <S.CardFooter>
                     <span>{i.category}</span>
                     <span>{i.author}</span>
                  </S.CardFooter>
                  <div className="cx-btn">
                     <Link to='/receitas/:id'>ver receita</Link>
                  </div>
            </S.Container>
       ))}
    </>
       
  

    
    
    
   
}