import React,{useState} from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../../../../assets/styles/user/Checkout.css';
import { BsCheck,BsFillBagCheckFill} from 'react-icons/bs';


const UserCheckoutForm = ({shopForm,states}) => {
    const {delivery,placeholder}=shopForm;
    const formField={
        name: '', 
        phone: '', 
        house:'', 
        area:'', 
        city:'', 
        state:'', 
        pin:''
    }
    const [value, setValue] = useState()
    return (
        <>
            <div className='col-lg-6 border-light customer-checkout-form'>
                <Formik
                    initialValues={formField}
                    validate={values => {
                        const errors = {};
                        // validate name field
                        if (!values.name) {
                        errors.name = 'Required';
                        } else if (
                        !/^[a-zA-Z]+\s|[a-zA-Z]{2,20}$/ig.test(values.name)
                        ) {
                        errors.name = 'Invalid name';
                        }
                        // validate phone field
                        if (!values.phone) {
                        errors.phone = 'Required';
                        } else if (
                        !/^[6-9]{1}[0-9]{9}$/ig.test(values.phone)
                        ) {
                        errors.phone = 'Invalid phone';
                        }
                        // validate house no. field
                        if (!values.house) {
                        errors.house = 'Required';
                        } else if (
                        !/^[A-Za-z\-{1}0-9]|\s*[A-Za-z]{3,20}$/ig.test(values.house)
                        ) {
                        errors.house = 'Invalid house/flat no.';
                        }
                        // validate area field
                        if (!values.area) {
                        errors.area = 'Required';
                        } else if (
                        !/^[A-Za-z\-{1}0-9]|\s*[A-Za-z]{3,20}$/ig.test(values.area)
                        ) {
                        errors.area = 'Invalid area';
                        }
                        // validate city field
                        if (!values.city) {
                        errors.city = 'Required';
                        } else if (
                        !/^[A-Za-z]{3,20}|\s*[A-Za-z]{3,20}$/ig.test(values.city)
                        ) {
                        errors.city = 'Invalid city';
                        }
                         // validate state field
                         if (!values.state) {
                        errors.state = 'Required';
                        }                         
                        else {}
                         // validate pincode field
                         if (!values.pin) {
                        errors.pin = 'Required';
                        } else if (
                        !/^\d{6,10}$/ig.test(values.pin)
                        ) {
                        errors.pin = 'Invalid pincode';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                            {/* Step 1: Delivery Address */}
                            
                            <div className="checkout-step-wrapper  d-flex-ai-center">
                                <div className='step-icon'>1</div>
                                <div className='checkout-step'>
                                    <p className='checkout-step-label'>Delivery Address</p>
                                    <div className="form-row">
                                        {/* <h5>Delivery Address</h5> */}
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputName">{delivery.name}</label>
                                            <Field type="text" name="name" className='form-control' id="inputName" placeholder={placeholder.name} />
                                            <ErrorMessage name="name" component="div" className='errorMessage'/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPhone">{delivery.phone}</label>
                                            {/* <PhoneInput
                                            country="IN"
                                            placeholder="Enter phone number"
                                            value={value}
                                            className="border border-danger" 
                                            onChange={setValue}/> */}
                                            <Field type="number" name='phone' className="form-control" id="inputPhone" placeholder={placeholder.phone} />
                                            <ErrorMessage name="phone" component="div" className='errorMessage'/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">{delivery.house}</label>
                                        <Field type="text" name='house' className="form-control" id="inputAddress" placeholder={placeholder.house} />
                                        <ErrorMessage name="house" component="div" className='errorMessage'/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress2">{delivery.area}</label>
                                        <Field type="text" name='area' className="form-control" id="inputAddress2" placeholder={placeholder.area} />
                                        <ErrorMessage name="area" component="div" className='errorMessage'/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">{delivery.city}</label>
                                            <Field type="text" name="city" className="form-control" id="inputCity" placeholder={placeholder.city} />
                                            <ErrorMessage name="city" component="div" className='errorMessage'/>

                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputState">{delivery.state}</label>
                                            <Field as='select' name='state' id="inputState" className="form-control">
                                                <option selected>Select...</option>
                                                {states.map(state=><option>{state}</option>)}
                                            </Field>
                                            <ErrorMessage name='state' component="div" className='errorMessage'/>

                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputZip">{delivery.pin}</label>
                                            <Field type="number" name='pin' className="form-control" id="inputZip" placeholder={placeholder.pin}/>
                                            <ErrorMessage name='pin' component="div" className='errorMessage'/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                I accept and confirm the above details
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-next" disabled={isSubmitting}>Save & Next</button>
                                </div>
                            </div>

                        </Form>
                    )}
                    </Formik>
                    
            </div>
            
        </>
    )
}

export default UserCheckoutForm