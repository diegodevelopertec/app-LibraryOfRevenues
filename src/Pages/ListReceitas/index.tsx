import * as S from './style'
import { Filter } from '../../components/Filter'
import {receitasData} from '../../data/data'
import { Card } from '../../components/Card'
import {useState,useEffect} from 'react'
import { RevenueType } from '../../Services/ApiReceitas'
import { ApiRevenues } from '../../Services/ApiReceitas'


export const ListReceitas=()=>{
    const [listRevenues,setListRevenues]=useState<RevenueType[]>([])

    let loadRevenue=async()=>{
        let result= await ApiRevenues.allReceitas()
          setListRevenues(result)
      }

useEffect(()=>{
    setTimeout(()=>loadRevenue(),1000)
},[])





    return <>
    <S.Container>
        <S.ContainerDivision>
            <S.ContainerFilter>
             <Filter />
            </S.ContainerFilter>
            <S.ContainerRevenues>
                <div className="receitas">
                  
                        <Card data={listRevenues}/>
                 
                </div>
            </S.ContainerRevenues>
        </S.ContainerDivision>
    </S.Container>
    </>
}