import React from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';


export default function Widget({title,data}) {
    const arr=data;
    const titleStyle = {
    flexBasis: '100%',
    margin:'0.6rem 0.5rem',
    color:'var(--fadedrk)',
    fontSize:'1.3rem',
    fontWeight: 'bold'
}


  return (
    <div className='row mb-4'>
        <div className='col-12'>
          <h5 style={titleStyle}>{title}</h5>
        </div> 
        {
        arr.map((ele)=>{
            return(
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' key={nanoid()}>
                <NavLink to='#'>
                    <img src={ele.url} alt={ele.alt} loading='lazy' />
                </NavLink>
            </div>
            )
        })
        }
    </div>
  )
}
