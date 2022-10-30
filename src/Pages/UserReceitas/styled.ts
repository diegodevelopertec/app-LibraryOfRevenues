import styled from "styled-components";


export const Container=styled.div`

    background-color: #c49c2d;
    display: flex;
    justify-content: center;


`

export const ContainerList=styled.div`
    height: 100%;
    width: 60vw;
    padding: 0 12px;
    flex-direction: column;
    display:flex;
.cx-search{
    display: flex;
    justify-content: center;
    padding: 25px 0;

    div{
        width: 60%;
        padding:10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        background-color: #2a2b2b;
    }
    img{
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        margin-left: 5px;
        position: static;
        right: 50px;
        top: 5px;
    }
    input{
        display: flex;
        width: 100%;
        border: 0;
        padding: 20px 10px;
        border-radius: 5px;
        font-size: 15px;
        
    }
    @media screen and (max-width:950px) {
        input{
             width:70%;
           }
    }
}

.cx-list{
    margin: 30px 0;
    padding: 15px;
    .card-receita{
       font-size: 15px;
        color: orange;
        display: flex;
        justify-content:space-between;
        align-items: center;
        background-color: #2a2b2b;
        margin: 15px 0px;
        padding: 20px 10px;
        border-radius: 3px;
        button{
            padding: 13px 5px;
            width: 90px;
            margin:0 5px;
            background-color: #227d48;
            border: 0;
            color: white;
            border-radius: 3px;
            &:hover{
                background-color: #219150;
            }
        }
    }
}
@media screen and (max-width:950px){
    width: 100%;
    .card-receita{
        flex-direction: column;
        p{
            margin: 20px 0;
        }
    }

}




`