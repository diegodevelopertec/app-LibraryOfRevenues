import ImageError from '../../assets/imgs/error.png'
import './style.css'
export const PageError=()=>{
    return <div className="error">
        <div>
           <img src={ImageError} alt="" />
        </div>
    
    </div>
}