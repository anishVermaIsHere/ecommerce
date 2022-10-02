import React from 'react';
import {GiCardboardBox} from 'react-icons/gi';
import { FaBoxOpen } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../../assets/styles/common/ErrorPage.css';

const ErrorPage = ({code}) => {
    return (
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-md text-center align-self-center" style={{padding:'80px 0', minHeight:'500px'}}>
                        <h1 className='error-code'>{code}</h1>
                        <FaBoxOpen className='error-icon'/>
                        <h2>Oops! You're Lost.</h2>
                        <h4>The page is does not exist.Go back to 
                        <NavLink to='/'>
                            <button class="btn bg-grndrk ml-2">Home</button>
                        </NavLink>
                        </h4>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ErrorPage