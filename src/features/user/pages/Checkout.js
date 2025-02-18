import React from 'react'
import UserCheckoutForm from '../components/checkout/UserCheckoutForm';
import BillSummary from '../components/checkout/BillSummary';


const Checkout = () => {
  return (
    <div className='col-lg-12'>
        <h2 style={{padding:'1rem', textAlign:'center'}}>Checkout</h2>
        <div className='row d-flex justify-content-center align-items-start checkout-container'>
            <UserCheckoutForm />
            <BillSummary />
        </div>
    </div>
  )
}

export default Checkout