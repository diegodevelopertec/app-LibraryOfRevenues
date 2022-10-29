import styled from "styled-components";

export const Container=styled.div`
background-color: #c49c2d;

`
export const ContainerDivision=styled.div`
    display: flex;
    height: 100%;

    @media screen and (max-width:950px){
        flex-direction: column;

     }

`
export const ContainerFilter=styled.div`
    display: flex;
    justify-content: center;
    width: 20%;
    padding-top: 30px;
    padding-right: 15px;


    @media screen and (max-width:950px){
        align-items: center;
        width: 100%;
        justify-content: center;
        padding: 30px 5px;
        
    }
 
`
export const ContainerRevenues=styled.div`
flex: 1;
display: flex;
padding: 15px 5px;
flex-wrap: wrap;
.receitas{
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 18px 5px ;
}
`