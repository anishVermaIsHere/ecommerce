import { nanoid } from 'nanoid';
import React,{useState,useEffect} from 'react';
import aside from '../../../../../assets/styles/sidemenu/FilterSection.module.css';
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import {BsFilter} from 'react-icons/bs';
import FilterRating from './FilterRating';
import { FilterPrice } from './FilterPrice';
import FilterProductType from './FilterProductType';


const FilterSection = ({
    handleRatings,
    handleTypes,
    ratingLabels,
    typesLabels,
    handleProducts,
    category
}) => {

    const [filter,setFilter]=useState(false);
    const [filterTitle,setFilterTitle]=useState(true);
    
    const filterToggle=()=>{
        setFilter(prev=>prev=!prev);
    }
    

    useEffect(()=>{
        function filterShow() {
            if(window.innerWidth>992){
                setFilter(true);
                setFilterTitle(true);
            } else if (window.innerWidth<992){
                setFilter(false);
                setFilterTitle(false);
            }
        }
        filterShow();
        window.addEventListener('resize', filterShow);
        return()=> {
            window.removeEventListener("resize", filterShow);
        };

    },[typesLabels])
    

    return (
        <>
            <aside className={aside.aside}>
                {filterTitle && 
                <h4 className={aside.aside_filter}><BsFilter className={aside.filterIcon} />Filter</h4>}
                <button className={aside.filter_toggle} onClick={filterToggle}>
                <BsFilter className={aside.filterIcon} />Filter
                    {!filter?
                        <MdKeyboardArrowDown className={aside.arrow} />
                        :
                        <MdKeyboardArrowUp className={aside.arrow} />
                    }
                </button>
            {filter && 
            <>
            <div className={aside.filter_item}>
                 <h5 className={aside.filter_title}>Price</h5>
                 <div className={aside.aside_item}>
                    <FilterPrice 
                    category={category}
                    handleProducts={handleProducts} 
                    />                   
                </div>                  
            </div>
             <div className={aside.filter_item}>
                 <h5 className={aside.filter_title}>Ratings</h5>
                 <div className={aside.aside_item}>
                     <ul>
                         {ratingLabels.map((item)=>{
                             return(
                                <FilterRating 
                                index={nanoid()} 
                                item={item} 
                                selectedRating={handleRatings} 
                                />
                             )
                         })
                         }
                     </ul>
                 </div>
             </div>
             {typesLabels.length>0&&<div className={aside.filter_item}>
                 <h5 className={aside.filter_title}>Types</h5>
                 <div className={aside.aside_item}>
                     <ul className={aside.type_filter_list}>
                         {typesLabels.map((item)=>{
                             return(
                                <FilterProductType 
                                index={nanoid()} 
                                items={item} 
                                selectedType={handleTypes} 
                                />
                             )
                         })
                         }
                     </ul>
                 </div>
             </div>}
             </>
             }

        </aside>
        </>
    )
}

export default FilterSection