import { nanoid } from 'nanoid';
import React,{useState,useEffect} from 'react';
import aside from '../../../../../assets/styles/sidemenu/FilterSection.module.css';
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import {BsFilter} from 'react-icons/bs';
import FilterCheckbox from './FilterCheckbox';
import { FilterPrice } from './FilterPrice';

const FilterSection = ({
    checkboxFn,
    filterLabels,
    productType
}) => {
    const [filter,setFilter]=useState(false);
    const [filterTitle,setFilterTitle]=useState(true);

    const filterToggle=()=>{
        setFilter(prev=>prev=!prev)
    }
    useEffect(()=>{
        function filterShow() {
            if(window.innerWidth>776){
                setFilter(true);
                setFilterTitle(true);
            } else if (window.innerWidth<776){
                setFilter(false);
                setFilterTitle(false);
            }
        }
        filterShow();
        window.addEventListener('resize', filterShow);
        return()=> {
            window.removeEventListener("resize", filterShow);
        };
    },[])

    return (
        <>
            <aside className={aside.aside}>
                {filterTitle && 
                <h4 className={aside.aside_filter}><BsFilter className={aside.filterIcon} />Filter</h4>}
                <h4 className={aside.aside_head} onClick={filterToggle}>
                <BsFilter className={aside.filterIcon} />Filter
                    {filter === false ?
                        <MdKeyboardArrowDown className={aside.arrow} />
                        :
                        <MdKeyboardArrowUp className={aside.arrow} />
                    }
                </h4>
                {filter && 
            <>
            <div className={aside.filter_item}>
                 <h5 className={aside.filter_title}>Price</h5>
                 <div className={aside.aside_item}>
                 <FilterPrice 
                    index={nanoid()}
                    productType={productType}
                    />                   
                </div>                  
            </div>
             <div className={aside.filter_item}>
                 <h5 className={aside.filter_title}>Rating</h5>
                 <div className={aside.aside_item}>
                     <ul>
                         {filterLabels.map((item)=>{
                             return(
                                <FilterCheckbox index={nanoid()} items={item} checkboxFn={checkboxFn} />
                             )
                         })
                         }
                     </ul>
                 </div>
             </div>
             </>
             }

        </aside>
        </>
    )
}

export default FilterSection