import './index.css'

export const Filter=()=>{
    return <>
    <div className="container">
    <label htmlFor="">Categorias</label>
        <select name="categorias" id="">
            <option value="">Hamburgues</option>
            <option value="">Doces e Bolos</option>
            <option value="">Pizzas</option>
            <option value="">todas</option>
        </select>
    </div>
    
    
    </>
}