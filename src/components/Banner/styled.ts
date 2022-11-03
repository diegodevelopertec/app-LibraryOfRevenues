import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    background-color: #d9aa29;
    width: 100%;
  
    @media screen and (max-width:950px){
        flex-direction: column;
        width: 100vw;
        padding: 30px 10px;
    }
`

export const ContainerDesc=styled.div`
    width: 70%;
    padding-left: 20px;
    padding-right: 10px;
    display: flex;
    align-items: center;

    h3{ font-size: 25px; }
    p{  margin-top: 30px; }


    @media screen and (max-width:950px){
        width: 100%;
        padding-top:25px;
        padding-bottom:25px;
        padding-left: 5px;
        font-size: 12px;
        h3{
            font-size: 20px;
        }
    }
`

export const ContainerImage=styled.div`
    overflow: hidden;
    display: flex;
    flex: 1;

    @media screen and (max-width:950px){
        flex-direction: column;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
        display: none;
        img{
            width: 300px;
            min-height: 140px;
            min-width: 80px;
            height: 200px;
            border-radius:100%;
            
        }
    }
`