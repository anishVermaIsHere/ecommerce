import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {signIn} from '../utils/constants/constant-data';
import {AiFillGoogleCircle} from 'react-icons/ai';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../services/auth/firebaseConfig';
import login from '../assets/styles/user/Login.module.css';
import ROUTES from '../routes/route-links';
import { useFormik } from 'formik';
import {signInSchema} from '../utils/validation/schema';
import { useDispatch } from 'react-redux';
import { setAccessToken, setUser } from '../lib/reducer/auth/auth-slice';



export default function SignIn() {
  const[showPwd,setShowPwd]=useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  let fieldValid=true;
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    validationSchema:signInSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  const showPassword=(event)=>{
   setShowPwd((val)=>val=!val) 
  }

  const signInWithGoogle=()=>{
      const provider = new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // Initialize Firebase Authentication and get a reference to the service
      const auth = getAuth(app);
      signInWithPopup(auth, provider)
          .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const currentUser = result.user;
              const user = {
                displayName: currentUser.displayName,
                email: currentUser.email,
                emailVerified: currentUser.emailVerified,
                photoURL: currentUser.photoURL,
              };
              dispatch(setUser(user));
              dispatch(setAccessToken(currentUser.accessToken));
              navigate('/');
              // ...
          }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
          });
  }

  return (
    <>
    <div className={login.loginCard}>
    <div className={login.loginFrame}>
        <h3 className={login.loginTitle}>{signIn.heading}</h3>
        <button className={login.signupBtn} id={login.signup} onClick={signInWithGoogle}>
            <AiFillGoogleCircle className={login.google}/>
            Continue with Google
        </button>
        <div className={login.loginContainer}>
        <form onSubmit={formik.handleSubmit} validate={formik.validationSchema}>
              {/* Email label */}
            {/* <label className={login.mainLabel}>{signIn.usernameLabel}</label> */}
            <input type="email" name="email" placeholder={signIn.namePlaceholder} 
            onChange={formik.handleChange}
            value={formik.values.email}
            className={fieldValid===false ? `{login.errorBorder}`: ''} />
            <div className={login.errorField}>
              {formik.errors.email ? <p className={`text-danger ${login.error}`}>{formik.errors.email}</p>: ""}
            </div>

            {/* Password label */}
            {/* <label className={login.mainLabel}>{signIn.passwordLabel}</label> */}
            <input type={showPwd ? "text":"password" }name="password" className='mt-3' 
            onChange={formik.handleChange}
            value={formik.values.password}
             placeholder={signIn.psdPlaceholder} />
            <div className={login.errorField}>
              {formik.errors.email ? <p className={`text-danger fs-2 ${login.error}`}>{formik.errors.password}</p>: ""}
            </div>
              <input type="checkbox" onChange={showPassword} name="show-password" className='mt-3'/> Show password
              
              {/* Submit Button */}
            <button className={login.loginBtn} id={login.login} type='submit'>Sign in</button>
            
            </form>

            <label className={login.helpBlock}>
                <input type="checkbox" name="keep-login"/>
                <span className={login.keepsignin}>Keep me signed in</span>
            </label>
            <label className={login.helpBlock}>
                <NavLink to='#' className={login.forgot}>Forgot your Password?</NavLink>
            </label>
        <div>
            <span className={login.message}>Don't have an account?</span> 
            <NavLink to={ROUTES.SIGNUP} className={login.signup}>
            <button className={login.signupBtn} id={login.signup}>
              Sign up
            </button>
            </NavLink>
        </div>
        </div>
    </div>
    </div>
</>
  )
}
