import * as S from './style'
import { Filter } from '../../components/Filter'
import {receitasData} from './../../data/data'
import { Card } from '../../components/Card'



export const Receitas=()=>{
    return <>
    <S.Container>
        <S.ContainerDivision>
            <S.ContainerFilter>
             <Filter />
            </S.ContainerFilter>
            <S.ContainerRevenues>
                <div className="receitas">
                 
                  <Card data={receitasData}/>
                 
                </div>
            </S.ContainerRevenues>
        </S.ContainerDivision>
    </S.Container>
    </>
}