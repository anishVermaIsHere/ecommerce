import React from 'react'
import aside from '../../../../../assets/styles/sidemenu/FilterSection.module.css';

const FilterProductType = ({index,selectedType,items}) => {
  const {checked,id,label}=items;
  return (
    <>    
    <li className={aside.list_item} key={index}> 
        <input type='checkbox' name={label} onChange={()=>selectedType(id)} checked={checked}/>
        <label htmlFor={label}>{label} </label> 
    </li>
    </>
  )
}

export default FilterProductType