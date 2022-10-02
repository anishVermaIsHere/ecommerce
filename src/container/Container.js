import React from 'react';
import Routing from '../utils/routes/Routing.jsx';

const Container= ()=> {

    return (
        <>        
        <div className='container' style={{maxWidth:'1680px',boxShadow:'0 0 20px 0 rgb(0 0 0 / 20%)'}}>
            <section className='row d-flex justify-content-center p-2'>
                {Routing ()} 
            </section>
        </div>
        </>
    );
}

export default Container;
