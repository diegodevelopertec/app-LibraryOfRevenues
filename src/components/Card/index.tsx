import * as S from './style'
import {Receitas} from '../../data/data'
import {Link} from 'react-router-dom'
import { RevenueType } from '../../Services/ApiReceitas'

type Prop={ data:RevenueType[]}


export const Card=({data}:Prop)=>{
    return <>
      {data.map((i,k)=>(
            <S.Container  key={k}>
                  <S.ContainerCapa id={i.id} backgroundImage={i.image}>
                     <div className="image" >
                        <img src={i.image} alt="" />
                     </div>
                  </S.ContainerCapa>
               
                  <S.ContainerDesc>
                     <p className='namecard'>{i.title}</p>
                     <p>{i.description}</p>
                  </S.ContainerDesc>

                  <S.CardFooter>
                     <span>{i.category}</span>
                     <span>{i.author}</span>
                  </S.CardFooter>
                  <div className="cx-btn">
                     <Link to='/receitas/:id'>ver</Link>
                  </div>
            </S.Container>
       ))}
    </>
       
  

    
    
    
   
}