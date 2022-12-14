import styled from "styled-components"

type Props={
    visible:Boolean
}

export const Containerheader=styled.header<Props>`
  
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px 5px ;
    background-color:#42413e;
    padding: 19px 0;
    
    .logo a {
        color: #d9aa29;
        font-size: 24px;
        font-size: 18px;
    }
    .nav{
        display:flex;
    }
    .nav a {
    padding: 0 6px;
    color: #7a7c80;
     &:hover{
        color: #d9aa29;
     }
}


.btn-mobile{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: none;
    display: none;
   
}
.img-mobile{
    height: 30px;
    width: 30px;
   
}

@media screen and (max-width:950px){
 
 justify-content: space-between;
 padding: 12px 5px ;


  .nav{
    top: 23px;
    position: absolute;
  
  }

 .btn-mobile{
     display: flex;
 }

 .nav{
    transition: all ease 3s;
     display:${props=>props.visible === true ? 'flex' : 'none'};
     margin-top:56px;
     flex-direction: column;
     position: absolute;
     right: 0px;
     padding: 5px;
     flex-direction: column;
     border: 2px solid #4c4d4f;
     background-color: #222422;
     padding: 5px;
     top: 0;
     border-top-left-radius: 5px;
     border-bottom-left-radius: 5px;
     transition: all ease 0.5s;

 
 }
 .nav a {
 
     padding: 10px 30px;
     color: #d9aa29;
 }
}
`






