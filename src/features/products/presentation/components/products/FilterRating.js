import React from 'react'
import aside from '../../../../../assets/styles/sidemenu/FilterSection.module.css';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';


const FilterRating = ({
  index,
  selectedRating,
  item
}) => {

  return (
    <li 
      className={aside.list_item} 
      key={index} 
      style={{fontWeight:item.selected?'600':'400'}} 
      onClick={()=>selectedRating(item.id)}
    > 
        {item.value&&  [...Array(5)].map((_,i)=>{
         return item.value>i?<AiFillStar className={aside.star} key={i}/>:
          <AiOutlineStar className={aside.star} key={i}/>
          })}
        <span className='ml-2'>& Up </span>
    </li>
  )
}

export default FilterRating