import styled from "styled-components";

export const ContainerHome=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
`

export const Container=styled.div`
    width:90vw;

    @media screen  and (max-width:950px){
        width: 100vw;
      
        
    }

`
export const  containerMeio=styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
    background-color: #42413e;
div{
    ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    display: flex;
    font-size: 35px;
    padding: 20px 10px;

            color: orange;
            img{
                height: 300px;
            }
}


@media screen  and (max-width:950px){
        width: 100vw;
      
        div{
            font-size: 18px;
        }
    }
`

export const ContainerEntrada=styled.div`
    width:100%;
    display: flex;
    padding: 100px 0;
    justify-content:center;
    align-items: center;

    img{
        box-shadow: 0 0 3px #f0eeed;
        height:440px;
        width:400px;
        border-radius: 100%;
       
    }

    a{
        box-shadow: 0 0 10px #d18658;
        color: #eee;
      font-weight: bold;
      margin-right: 30px;
      background-color: orange;
      padding: 30px ;
      border-radius: 15px;
      text-transform: uppercase;
        &:hover{
            outline:5px solid  orange;
            color: orange;
            background-color: transparent;
        }
    }

    @media screen  and (max-width:950px){
      width: 100%;
      flex-direction: column;
      a{
        margin:30px 0 20px 0;
        order: 2;
      }
      img{
          width: 250px;
          height: 250px;
      }

    
        
    }

`