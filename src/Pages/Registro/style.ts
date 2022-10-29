import styled from "styled-components";



export const ContainerRegistro=styled.div`
background-color: #d4cc3b;
display: flex;
justify-content: center;
padding:100px 0 ;
`

export const Container=styled.div`
width: 80vw;
display: flex;

    @media screen  and (max-width:950px){
        width: 100vw;
        padding: 0 5px;
    }
`

export const ContainerDivision=styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    
.cx-form{
    width: 70%;
}
.cx-image{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
 height: 100%;
    img{
        height: 300px;
    }
}


@media screen and (max-width:950px){
    flex-direction: column;
    .cx-image{
        order: 1;
     
        img{
            display: none;
            height: 300px;
            width: 300px;
         }
     }
     .cx-form{
        display: flex;
        justify-content: center;
       width: 100vw;
      
}
}

`

export const Form=styled.form`
background-color: #383835;
border-radius: 13px;
padding: 70px 0;
color: #a8a11e;
box-shadow: 0 0 5px #eee;

h3{
    padding-left: 100px;
    font-size: 25px;
}
p{
    margin: 30px 12px;
}
.cx-inputs{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
        width: 80%;
        padding: 15px 6px;
        margin: 10px 0;
        border-radius: 5px;
        background-color:#61615c;
        border: none;
        color: white;
        font-size: 18px;
        &:focus{
            transition:all ease 3s;
            outline: 2px solid #Eeee;
        }
        &::placeholder{
            color: #7a7a7a;
        }
        
    }
    .submit{
        background-color: #0b8c25;
        &:hover{
            transition:all ease 2s;
            cursor: pointer;
            background-color: #0d7522;
        }
    }
}

@media screen  and (max-width:950px){
    width: 90%;
    h3{
        padding-left: 0;
        text-align: center;
    }
}
`