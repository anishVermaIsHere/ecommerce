import React from 'react';
import { nanoid } from 'nanoid';
import '../../assets/styles/Category.css';
import { prodCategory } from '../../utils/constants/constant-data';
import {NavLink} from 'react-router-dom';

const Category = () => {
    return (
        <>
            <div className="heading-section">
                <div className='start-shopping'>
                    <h2 className='shopping-text'>Start Shopping</h2>
                    <button className='shop-now'>
                        <NavLink to='/products'>
                        Shop now
                        </NavLink>
                    </button>
                </div>
                <h1 className="featured-products">Featured Products</h1>
                
            </div>
            <div className="row justify-content-center category-container">
                {
                    prodCategory.map((catg)=>{
                        return(
                            <div className='catg-col'>
                            <NavLink to={catg.link}>
                                <div className='prod-catg-cvr' id={nanoid()}>
                                    <div className='prod-catg-img-container'>
                                        <img src={catg.image} alt={catg.name} />
                                    </div>
                                    <p className="prod-categ-title">{catg.name}</p>
                                </div>
                            </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Category