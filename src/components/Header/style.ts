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
    background-color:#c0c1c2;

    nav{
        display:flex;
    }
    .nav a {
    padding: 0 6px;
    color: #7a7c80;
}
.nav a:hover {
    color:#5c5f63;
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
    .navbar{
        position: relative;
        right: 0;
       
    }

 .btn-mobile{
     display: flex;
 }

 .nav{
    transition: all ease 3s;
     display:${props=>props.visible === true ? 'flex' : 'none'};
     margin-top: 10px;
     flex-direction: column;
     position: relative;
     right: 0;
     padding: 5px;
    flex-direction: column;
    border: 2px solid #4c4d4f;
  

 
 }
 .nav a {
     padding: 10px 30px;
 }
}
`






