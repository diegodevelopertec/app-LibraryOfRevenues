import * as S from './styled'
import { Link, useNavigate } from 'react-router-dom'
import {useState,ChangeEvent} from 'react'
import { ApiRevenues } from '../../Services/ApiReceitas'



export const AddReceita=()=>{
    const navigate=useNavigate()
    const [title,setTitle]=useState('')
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [content,setContent]=useState(' ')
    



const PostRevenue=async (e:any)=>{
  if(title && image  && description && content){
   
    let request=await ApiRevenues.createRevenue({title,image,description,content})
   
  }else{
    alert('Preencha os campos ')
  }
    
}




const cancelRevenue=()=> navigate(-1)

    return <>
    <S.Container>
        <div className="container-form">
          <p>Crie uma nova receita preenchendo os campos :</p>
          <S.Form>
            <div className="cx-inputs">
                <input type="text" 
                   placeholder='Digite o Titulo da Receita'
                   value={title}
                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)} />
                <input type="text"  
                   placeholder='Digite uma breve descrição' 
                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setDescription(e.target.value)} 
                   value={description}
                   />
                <div className="input-file">
                    <input type="file" 
                      name="" id="" 
                      accept="image/png, image/jpeg"
                      value={image} 
                      onChange={(e:ChangeEvent<HTMLInputElement>)=>setImage(e.target.value)}/>
                </div>
                <div className="input-categorys">
                   <span> <input type="radio" name="category" id=""  value='Doces' /> Doces</span>
                   <span> <input type="radio" name="category" id="" value='Pizza' />Pizza</span>
                   <span> <input type="radio" name="category"value="Hamburguer"  /> Hamburgue</span>
                   <span> <input type="radio" name="category" value="outros"  /> outros</span>
                </div>
                <textarea name="" id=""
                 placeholder='Escreva a sua receita aqui ...'
                 onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setContent(e.target.value)} >
                   {content}
                </textarea>
            </div>
            <div className="cx-btns">
                <Link to='' onClick={cancelRevenue} className='btn-cancel'>cancelar</Link>
                <Link to='/receitas' type='submit' onClick={PostRevenue} className='btn-save'>salvar</Link>
            </div>



          </S.Form>
        </div>

    </S.Container>
    
    
    </>
}