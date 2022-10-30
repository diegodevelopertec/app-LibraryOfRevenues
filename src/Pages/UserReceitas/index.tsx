import * as S from './styled'
import {receitasData} from '../../data/data'
import BuscaIcon from '../../assets/icons/busca.png'


export const UserReceitas=()=>{
    return <S.Container>
        <S.ContainerList>
            <div className="cx-search">
            
               
                   <div>
                   <input type="search" placeholder='Pesquise por uma receita..'  />
                    <img src={BuscaIcon} />
                   </div>
                
            
            </div>
            <div className='cx-list'>
            {receitasData.map((item,index)=>(
                <div className="card-receita">
                <div className="name-receita">
                    <p>{item.name}</p>
                </div>
                <div className="cx-actions">
                    <button> ver </button>
                    <button>deletar</button>
                </div>
                </div>
            ))}
        </div>
        </S.ContainerList>
      


    </S.Container>
}