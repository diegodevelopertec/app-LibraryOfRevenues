import styled from "styled-components";

export const Container=styled.div`
height: 100vh;


.container-division{
    height:100%;
  
   
}
`

export const ContainerLeft=styled.div`
position:absolute;
left: 0;
width: 20%;
height: 100vh;
background-color: #393b3a;
display: flex;
align-items: center;
padding: 10px 5px;
flex-direction: column;
color: #CFAA16;
.container-data{
    border:2px solid orange;
    width: 95%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 100vh;
  
 
    .cx-data-user{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items:center;
        padding:20px 0;
        p{
            padding: 10px 0;
        }
                img{
                    height: 160px;
                    width: 160px;
                    border-radius: 100%;
            }
    }
    
    .cx-icons{
        margin-top: 30px;
       .icons{
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                height: 90px;
                &:hover{
                    border-radius: 3px;
                    background-color: #848785;
                }
            }

            a{
                padding: 2px;
                margin: 10px 0;
               
            }
       }
    }
}
`

export const ContainerRight=styled.div`
flex: 1;
background-color:#CFAA16;
margin-left: 20%;
height: 100%;


.routes{
width: 100%;
height: 100%;
background-color: red;
}
`