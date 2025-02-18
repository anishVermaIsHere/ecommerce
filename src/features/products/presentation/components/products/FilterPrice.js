import React,{useState,useRef,useEffect} from 'react'
import aside from '../../../../../assets/styles/sidemenu/FilterSection.module.css';
import RangeSlider from '../../widgets/RangeSlider';
import { renderProducts } from '../../../../../lib/reducer/filter/filter-slice';
import { useDispatch } from 'react-redux';



export const FilterPrice = ({handleProducts,category}) => {
  const [minValue,setMinValue]=useState(0);
  const [maxValue,setMaxValue]=useState(200000);
  const priceDiff=1000;
  const min=0;
  const max=200000;
  const step=100;
  const progress=useRef(null);
  const dispatch=useDispatch();

    const handleMinVal=(event)=>{
        if(maxValue-minValue>=priceDiff&&maxValue<=max){          
          if (parseInt(event.target.value) > parseInt(maxValue)) {
          } else {
            setMinValue(parseInt(event.target.value));
          }
        }
        else {
          if (parseInt(event.target.value) < minValue) {
            setMinValue(parseInt(event.target.value));
          }
        }
      }
    
      const handleMaxVal=(event)=>{
        if (maxValue - minValue >= priceDiff && maxValue <= max) {
          if (parseInt(event.target.value) < parseInt(minValue)) {
          } else {
            setMaxValue(parseInt(event.target.value));
          }
        } else {
          if (parseInt(event.target.value) > maxValue) {
            setMaxValue(parseInt(event.target.value));
          }
        }
      }

    const filterByPrice=async()=>{      
      const response=await handleProducts(category);
      const filterProducts=response.data.filter(item=>item.price>=minValue&&item.price<=maxValue);
      dispatch(renderProducts(filterProducts));
    }

  useEffect(()=>{
    progress.current.style.left = (minValue / max) * step + "%";
    progress.current.style.right = step - (maxValue / max) * step + "%";
    filterByPrice();
    },[minValue, maxValue, min, max, step])
  
    return (
        <div>
            <RangeSlider 
            minValFn={handleMinVal}
            maxValFn={handleMaxVal} 
            minValue={minValue}
            maxValue={maxValue}
            min={min}
            max={max}
            step={step}
            progressBar={progress}
            />
            
            
            <div className={aside.price_field}>
                <div className={`${aside.price_input_field} mt-2 mb-2`}>
                    <span>min</span>
                    <input className={aside.min_input} type='number' value={minValue} onChange={(e)=>{
                      setMinValue(e.target.value);
                    }
                    }/>
                </div>
                <div className={`${aside.price_input_field} mt-2 mb-2`}> 
                    <span>max</span>
                    <input className={aside.max_input} type='number' value={maxValue} onChange={ (e)=>{
                      setMaxValue(e.target.value);
                    }
                    }/>
                </div>
            </div>
        </div>
    )
}
