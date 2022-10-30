import * as S from "./style"
import Perfil from './../../assets/imgs/perfil.jpg'
import listIcon from './../../assets/icons/list.png'
import configIcon from './../../assets/icons/config.png'
import { Link,Routes,Route} from "react-router-dom"
import { ConfigConta } from "../ConfigConta"
import { UserReceitas } from "../listaUserReceitas"

export const ContaPage=()=>{
    return <S.Container>
        <div className="container-division">
       
          <S.ContainerLeft>
                <div className="container-data">
                   <div className="cx-data-user">
                     <img src={Perfil} alt="" />
                     <p>name user</p>
                   </div>
                   <div className="cx-icons">
                    <div className="icons">
                        <Link to='/listreceitas'><img src={listIcon} alt="" /></Link>
                        <Link to='/config'><img src={configIcon} alt="" /></Link>
                    </div>
                   </div>
                </div>
            </S.ContainerLeft>
            <S.ContainerRight>
               <div className="routes">
               <Routes>
                    <Route path='/config' element={<ConfigConta />} />
                    <Route path='/listreceitas' element={<UserReceitas />}  />
                </Routes>
               ddd
               </div>
            </S.ContainerRight>
         

        </div>
    </S.Container>
}