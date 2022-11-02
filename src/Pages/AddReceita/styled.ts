
import styled from "styled-components";

export const Container=styled.div`
width: 100%;
background-color: transparent;
display: flex;
justify-content:center;
background-color: #c49c2d;
    .container-form{
        padding:75px 15px;
        display: flex;
        flex-direction: column;
        width: 80vw;
        align-items: center;
        
        p{
            color: white;
        }
        @media screen and (max-width:950px) {
            width: 100%
        }
    }
`

export const Form=styled.div`
background-color: #363533;
margin: 30px ;
padding: 30px 35px;
border-radius: 15px;
width: 60%;
box-shadow:  0 0 10px #aaa;

.cx-inputs{
    display: flex;
    flex-direction:column;
    width: 100%;

    input{
        border: 0;
        border-radius: 5px;
        padding: 15px;
        margin: 14px 0;
        outline: 0;
        font-size: 16px;
    }

    .input-file{
       input{
            margin: 14px 0;
            padding: 15px;
           }
       border-radius: 3px;
      background-color: white;
    }

    .input-categorys{
        display: flex;
        justify-content: center;
        padding: 20px 0;
        color: white;
        span{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 10px;
                input{
                    height: 30px;
                    width: 30px;
                    }
           }

         @media screen  and (max-width:340px){
            align-items: center;
            justify-content:auto;
                
            font-size: 12px;
            span{
                margin:0;
            }
            input{
             height: 30px;
             width: 30px;
             }
         }

     
    }
    textarea{
        border: 0;
        border-radius: 3px;
        padding:  9px;
        outline: 0;
        margin: 15px 0;
        height: 600px;
        resize:none;
        font-size: 16px;
    }
}


.cx-btns{
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        border: none;
        padding: 15px 30px;
        border-radius: 3px;
        color: white;
        margin:30px 15px;
        width: 170px;
        text-align: center;
    }

    .btn-cancel{
        background-color: #e04428;
        &:hover{
            background-color: #e0391b;
        }
    }
    .btn-save{
            background-color: #128c2b;
            &:hover{
                background-color: #127a27;
            }
    }
}


@media screen and (max-width:950px) {
            width: 100%;
            padding: 10px 15px;
        }
`