import * as S from './styled'
import { Link, useNavigate } from 'react-router-dom'


export const AddReceita=()=>{
    const navigate=useNavigate()


const cancelRevenue=()=> navigate(-1)

    return <>
    <S.Container>
        <div className="container-form">
          <p>Crie uma nova receita preenchendo os campos :</p>
          <S.Form>
            <div className="cx-inputs">
                <input type="text" placeholder='Digite o Titulo da Receita' />
                <input type="text"  placeholder='Digite uma breve descrição' />
                <div className="input-file">
                    <input type="file" name="" id="" accept="image/png, image/jpeg" />
                </div>
                <div className="input-categorys">
                   <span> <input type="radio" name="category" id=""  value='Doces' /> Doces</span>
                   <span> <input type="radio" name="category" id="" value='Pizza' />Pizza</span>
                   <span> <input type="radio" name="category"value="Hamburgue"  /> Hamburgue</span>
                   <span> <input type="radio" name="category" value="outros"  /> outros</span>
                </div>
                <textarea name="" id="" placeholder='Escreva a sua receita aqui ...'></textarea>
            </div>
            <div className="cx-btns">
                <Link to='' onClick={cancelRevenue} className='btn-cancel'>cancelar</Link>
                <Link to='/receitas' type='submit' className='btn-save'>salvar</Link>
            </div>



          </S.Form>
        </div>

    </S.Container>
    
    
    </>
}