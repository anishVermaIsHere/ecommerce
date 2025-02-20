import React from 'react';
import '../../assets/styles/common/Loader.css';

const Loader = () => {
    const center={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh'
    }
  return (
    <div className="col-12" style={center}>
        <div className="loader-container">
            <div className="loader">
            </div>
        </div>
    </div>
  )
}

export default Loader