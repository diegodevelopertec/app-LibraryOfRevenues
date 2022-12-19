import styled from "styled-components";

export const Container=styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0px;
    background-color: #c49c2d;
    height: 100vh;
.container-conta{
    padding: 0 30px;
    background-color: #4b4d4b;
    box-shadow: 0 0 10px #2a2b2b;
    color: #c49c2d;
    width: 450px;
    border-radius: 5px;
    flex-direction: column;
     height: 600px;
        .cx-img{
            justify-content: center;
            display: flex;
            padding: 20px 0;
            margin:15px 0;
        }
        
        img{
            height: 190px;
            width: 190px;
            border-radius: 100%;
        }

        .cx-inputs{
        
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
                div{
                    width: 100%;
                    margin: 5px 10px;
                }
            input{
                padding: 12px 6px;
                border-radius: 5px;
                border: none;
                background:#191a19;
                text-align: center;
                font-size: 16px;
                width: 100%;
                color: #c49c2d;
                outline:0;
                    &:disabled{
                        color:  #a3a3a3;
                    }
                        &:focus{
                        border: 2px solid orange;
                        }
            }
            button{
                width: 130px;
                margin: 13px 0;
                padding: 15px 5px;
                background-color: #209146;
                color: white;
                border: none;
                border-radius: 5px;
                justify-content:center;
                align-items: center;
                font-size: 17px;
                img{
                    height: 20px;
                    width: 20px;
                }
            }

        
        }
    @media screen and (max-width:930px) {
            margin: 0 12px;
        }

}

`