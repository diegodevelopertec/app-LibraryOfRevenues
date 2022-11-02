import './style.css'
import InstaImage from '../../assets/icons/insta.png'
import ZapImage from '../../assets/icons/zap.png'
import LinkImage from '../../assets/icons/linked.png'


export const Footer=()=>{
    return <footer className='footer' >
        <div>
           <div className="redes">
               <div className="links">
                     <p> Acesse nossas redes sociais:</p>
                        <div className="links-itens">
                        <a href=" "><img src={InstaImage} alt="" /></a>
                        <a href=""><img src={ZapImage} alt="" /></a>
                        <a href=""><img src={LinkImage} alt="" /></a>
                        </div>
               </div>
           </div>

        </div>
    
    </footer>
}