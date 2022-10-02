import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Widget({title,data}) {
    const arr=data;
    const titleStyle = {
    flexBasis: '100%',
    margin:'0.6rem 0.5rem',
    color:'var(--fadedrk)',
    fontWeight: 'bold'
}

  return (
    <div className='row'>
        <div className='col-12'>
          <h5 style={titleStyle}>{title}</h5>
        </div> 
        {
        arr.map((ele)=>{
            return(
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                <NavLink to='#'>
                    <img src={ele.url} alt={ele.alt} />
                </NavLink>
            </div>
            )
        })
        }
    </div>
  )
}
