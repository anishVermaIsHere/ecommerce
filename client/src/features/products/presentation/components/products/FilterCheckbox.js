import React from 'react'
import aside from '../../../../../assets/styles/sidemenu/FilterSection.module.css';
import { AiFillStar} from 'react-icons/ai';


const FilterCheckbox = ({index,checkboxFn,items}) => {
  const {checked,id,value,label}=items;
  return (
    <li className={aside.list_item} key={index}> 
        <input type='checkbox' name={label} onChange={()=>checkboxFn(id)} checked={checked}/>
        <label className={aside.filter_label} for={label}>{label} </label> 
        <AiFillStar className={aside.star}/>
    </li>
  )
}

export default FilterCheckbox