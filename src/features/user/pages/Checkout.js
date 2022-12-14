import React from 'react'
import UserCheckoutForm from '../components/checkout/UserCheckoutForm';
import BillSummary from '../components/checkout/BillSummary';
import {shopForm,indiaState} from '../../../utils/constants/constant-data';

const Checkout = () => {
  return (
    <div className='col-lg-12'>
            <h2 style={{padding:'1rem', marginLeft:'8rem'}}>Checkout</h2>
        <div className='row d-flex justify-content-center align-items-start checkout-container'>
            <UserCheckoutForm states={indiaState} shopForm={shopForm}/>
            <BillSummary />
        </div>
    </div>
  )
}

export default Checkout