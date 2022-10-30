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
                <textarea name="" id="" placeholder='Escreva a sua receita aqui ...'></textarea>
            </div>
            <div className="cx-btns">
                <Link to='' onClick={cancelRevenue} className='btn-cancel'>cancelar</Link>
                <Link to='' type='submit' className='btn-save'>salvar</Link>
            </div>



          </S.Form>
        </div>

    </S.Container>
    
    
    </>
}