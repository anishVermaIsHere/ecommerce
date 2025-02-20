import React from 'react'
import slider from '../../../../assets/styles/sidemenu/FilterSection.module.css';

const RangeSlider = ({
    minValFn,
    maxValFn, 
    minValue,
    maxValue,
    min,
    max,
    step,
    progressBar
}) => {    

    return (
        <div style={{marginTop:'0.5rem'}}>
            <div id='price-control-bar' className={slider.price_control_bar}>
                <div className={slider.progress_bar} ref={progressBar}></div>
            </div>
            <div className={`${slider.range_input} d-flex`}>
                <input type='range' min={min} max={max}  step={step} value={minValue} onChange={minValFn}/>
                <input type='range' min={min} max={max}  step={step} value={maxValue} onChange={maxValFn} />
            </div>
        </div>
    )
}

export default RangeSlider