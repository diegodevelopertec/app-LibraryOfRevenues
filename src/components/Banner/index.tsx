import * as S from './styled'



type Props={
    image:string,
    text:string,
    title:string
}
export const Banner=({image,text,title}:Props)=>{
    return <>
    <S.Container>
        <S.ContainerDesc>
          <div>
          <h3>{title}</h3>
            <p>
                {text}
            </p>
          </div>
        </S.ContainerDesc>
        <S.ContainerImage>
            <img src={image} alt="" />
        </S.ContainerImage>
    </S.Container>
    
    
    </>
}