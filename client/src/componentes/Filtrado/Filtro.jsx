import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderByName } from '../../redux/actions';

const Filtro = (props) => {

  const dispatch = useDispatch()
  const all = useSelector((state) => state.recipes)

  const handleSort = (e) => {
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    
  }

  return (
    <div>
      <select>
        <option value='asc' >Ascendente</option>
        <option value='desc' >Descendente</option>
        <option value='healthScore' >HealthScore</option>
      </select>

      <select>
        <option>Tipo de dieta</option>
      </select>
    </div>
  )
}

export default Filtro