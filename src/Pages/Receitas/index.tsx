import * as S from './style'
import { Filter } from '../../components/Filter'

export const Receitas=()=>{
    return <>
    <S.Container>
        <S.ContainerDivision>
            <S.ContainerFilter>
             <Filter />
            </S.ContainerFilter>
            <S.ContainerRevenues>
                <div className="receitas">
                    receitas
                </div>
            </S.ContainerRevenues>
        </S.ContainerDivision>
    </S.Container>
    </>
}