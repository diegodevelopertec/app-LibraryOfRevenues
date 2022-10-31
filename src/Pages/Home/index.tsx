import * as S from './style'
import {Link } from 'react-router-dom'
import { Banner } from '../../components/Banner'
import imageBanner from '../../assets/imgs/experimentando.jpg'
import MorenaImage from '../../assets/imgs/mulherexibindo.jpg'
import CozinhairaImage from '../../assets/imgs/cozinheira.png'

export const Home=()=>{

    let isLogged=false


    return <>
    <S.ContainerHome>
        <S.Container>
         <div className='topo'>
         <Banner
           title='Chegou a hora de Alavancar seus conhecimentos na Cozinha!'
            text={`
                Que tal aprender novas receitas e ao mesmo tempo se divertir com nooovos sabores
                Aqui na ReceitasOn voçê pode 
                aprender novas receitas e ainda poder compartilhar com outros as que voçê sabe
                Why do we use it?
                It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 
                making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  ometimes on purpose 
                Que tal aprender novas receitas e ao mesmo tempo se divertir com nooovos sabores
                Aqui na ReceitasOn voçê pode 
                aprender novas receitas e ainda poder compartilhar com outros as que voçê sabe
                Why do we use it?
                
                `}
            image={imageBanner} />
           
         </div>
        <S.containerMeio>
            <div>
                <ul>
                    <li>Crie receitas</li>
                    <li>Compartilhe receitas</li>
                    <li>Faça e Saboreie</li>
                </ul>
                
                    <img src={CozinhairaImage} alt="" />
                
            </div>

        </S.containerMeio>

         <div>
            <S.ContainerEntrada>
               
                <Link to={isLogged ? '/receitas' : '/login'}>quero ver receitas</Link>
                <img src={MorenaImage} alt=""  />
                
            </S.ContainerEntrada>
         </div>
        </S.Container>
    </S.ContainerHome>
    
    
    
    </>
}