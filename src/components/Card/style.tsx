import styled from "styled-components";

export const Container=styled.div`
   background-color: #33312c;
   box-shadow: 0 0 6px #aaa;
   padding: 15px ;
   margin: 12px;
   display: flex;  
   flex-direction: column;
   width: 300px;
   border-radius: 3px;

  .cx-btn  {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    a{
        background-color:#000000b6;
        outline: 2px solid orange;
        padding: 13px;
        color :white;
        border-radius: 3px;

        &:hover{
            outline: 3px solid #000;
            background-color:orange;
            color: #000;
            font-weight: bold;
         }
    }
  }
`

type Prop={
    backgroundImage:string
}

export const ContainerCapa=styled.div<Prop>`

.image{
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    background-image: url(${props=>props.backgroundImage ? props.backgroundImage: null});
}
`

export const ContainerDesc=styled.div`
    padding:10px 5px;
    color:#ba8a0f;

    .namecard{
        margin: 15px 0;
    }

`

export const CardFooter=styled.div`
    padding: 15px 0;
    color: #b6bfb8;
    display: flex;
    justify-content: space-around;
    font-size: 11px;
`