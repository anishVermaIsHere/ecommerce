import React from 'react';
import {signUp} from '../utils/constants/constant-data';
import signup from '../assets/styles/user/Login.module.css';
import { useFormik } from 'formik';
import {signUpSchema} from '../utils/validation/validation-schema';

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password:'',
      confirmPassword:'',
      acceptTerms:false
    },
    validationSchema:signUpSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <>
    <div className={signup.loginCard}>
    <div className={signup.loginFrame}>
        <h3 className={signup.loginTitle}>{signUp.heading}</h3>
       
       <form onSubmit={formik.handleSubmit} validate={formik.validationSchema}>
        <div className={signup.loginContainer}>
            <input type="text" name="name" value={formik.values.name}  onChange={formik.handleChange} placeholder={signUp.usernamePlaceholder} />
            <div className={signup.errorField}>
              {formik.errors.name?<small className={`text-danger ${signup.error}`}>{formik.errors.name}</small>:""}
            </div>

            <input type="text" name="phone" value={formik.values.phone}  onChange={formik.handleChange} placeholder={signUp.phonePlaceholder} className='mt-3' />
            <div className={signup.errorField}>
             {formik.errors.phone? <small className={`text-danger ${signup.error}`}>{formik.errors.phone}</small>:""}
            </div>

            <input type="email" name="email" value={formik.values.email}  onChange={formik.handleChange} placeholder={signUp.emailPlaceholder} className='mt-3' />
            <div className={signup.errorField}>
              {formik.errors.email?<small className={`text-danger ${signup.error}`}>{formik.errors.email}</small>:""}
            </div>

            <input type="password" name="password" value={formik.values.password}  onChange={formik.handleChange} className='mt-3' placeholder={signUp.psdPlaceholder} />
            <div className={signup.errorField}>
              {formik.errors.password?<small className={`text-danger ${signup.error}`}>{formik.errors.password}</small>:""}
            </div>
            
            <input type="password" name="confirmPassword" value={formik.values.confirmPassword}  onChange={formik.handleChange}className='mt-3' placeholder={signUp.psd2Placeholder} />
            <div className={signup.errorField}>
             {formik.errors.confirmPassword? <small className={`text-danger ${signup.error}`}>{formik.errors.confirmPassword}</small>:""}
            </div>
            <input type="checkbox" name="acceptTerms" value={formik.values.acceptTerms}  onChange={formik.handleChange} className='mt-3'/> I have read and agree to the terms
            <button className={signup.signupBtn} id={signup.login} type='submit'>Sign up</button>
        </div>
        </form>
    </div>
    </div>
</>
  )
}
