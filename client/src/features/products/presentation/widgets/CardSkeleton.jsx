import { nanoid } from 'nanoid';
import React from 'react';
import '../../../../assets/styles/product/ProductSkeleton.css';


const CardSkeleton = () => {
    
    return (
        <div key={nanoid()} className="card col-lg-3 col-md-4 col-sm-4">
            <div className='img-container'>
                <div className='card-img-skeleton'>
                </div>
            </div>
            <div className="card-body">
                <div className="card-text-skeleton mb-3"></div>
                <div className="card-text-skeleton mb-3"></div>
                <div className='card-action mt-auto d-flex-ai-center'>
                    <div className='btn-skeleton'></div>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton