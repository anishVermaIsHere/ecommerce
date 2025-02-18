import React from 'react'
import '../../../../assets/styles/user/Checkout.css';
import {RiBillLine} from 'react-icons/ri';
import {useSelector} from 'react-redux';


const BillSummary = () => {

    const subTotal=useSelector(state=>state.cartSlice.totalAmount).toFixed(2);
    const totalItems=useSelector(state=>state.cartSlice.products.length);
    const gst=(0.18*subTotal).toFixed(2);
    const shipCharge=(subTotal>0 && subTotal<1000) ? 100.00 : 0.00;
    const total=(Number(subTotal)+Number(shipCharge)+Number(gst)).toFixed(2);

    return (
        <div className='col-lg-3 border-light'>
            <div className='checkout-cart-container'>
                <div className='summary'>
                    <div className='summary-head'>
                        <h4 className='summary-title'>
                            Summary
                            <RiBillLine style={{ float: 'right', fontSize: '1.5rem' }} />
                        </h4>
                        <p className='summary-text'>The total cost consist of the tax and shipping charge</p>
                    </div>
                    <div className='summary-details'>
                        <p>Total items {totalItems} </p>
                        <div className='summary-item'>
                            <p className='sub-total'>
                                <strong>
                                    Sub Total
                                <span className='sub-total-amt'>&#8377;{subTotal}</span>
                                </strong>
                            </p>
                        </div>
                        <div className='summary-item'>
                            <p className='summary-charge'>
                                Shipping
                                <span className='summary-amt'>+&#8377;{shipCharge}</span>

                            </p>
                        </div>
                        <div className='summary-item'>
                            <p className='summary-charge'>
                                GST
                                <span className='summary-amt'>+&#8377;{gst}</span>
                            </p>
                        </div>

                        <div className='summary-item'>
                            <p className='grand-total'>
                                <strong>
                                    Total
                                <span className='grand-total-amt'>{total}</span>
                                </strong>
                            </p>
                        </div>
                    </div>
                    <p className='have-an-discount text-primary'>Have an discount code</p>
                </div>

            </div>
        </div>
    )
}

export default BillSummary