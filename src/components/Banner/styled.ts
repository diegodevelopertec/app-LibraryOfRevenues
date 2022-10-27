import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    background-color: #d9aa29;
    width: 100%;
    height: 370px;
  
    



@media screen and (max-width:920px){
    flex-direction: column;
    min-height: 500px;
    width: 100vw;
   padding: 10px;
}
`

export const ContainerDesc=styled.div`
     width: 70%;
    padding-top:30px;
    padding-left: 20px;
    padding-right: 10px;

h3{
    font-size: 25px;
}

p{
    margin-top: 30px;
}


@media screen and (max-width:920px){
    width: 100%;
    padding-top:5px;
    padding-left: 5px;
    font-size: 12px;
}
`
export const ContainerImage=styled.div`
    overflow: hidden;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

img{

}

@media screen and (max-width:920px){
    flex-direction: column;
   padding-top: 20px;
   padding-bottom: 20px;
    width: 100%;
    height: auto;
   justify-content: center;
   align-items: center;
    img{
        width: 300px;
        min-height: 140px;
        min-width: 80px;
        height: 300px;
        border-radius:100%;
     }
}
`