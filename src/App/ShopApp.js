import React, {useState, useEffect} from 'react';
import '../App.css';
import {useNavigate, useLocation } from 'react-router-dom';
import {auth} from '../utils/services/auth/firebaseConfig';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";  
import Header from '../components/header/Header'
import Container from '../container/Container';
import Footer from '../components/footer/Footer';


const ShopApp=()=> {
  const [user,setUser]=useState(null);
  const navigate=useNavigate();
  const location=useLocation();
  
  const signOutUser=()=>{
    signOut(auth).then(() => {
    // Sign-out successful.
      setUser(null);
      localStorage.removeItem('authUser');
      navigate('/signin')
    }).catch((error) => {
      // An error happened.
      alert('Signout Failed');
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUser=auth.currentUser;
        console.log('current user',currentUser)
        setUser(currentUser);
        // ...
        if(location.pathname=='/signin'){
          navigate('*');
        }
      } else {
        // No user signed in 
      }
    });
    
  },[])
  

  return (
    <div className='app-container'>
      <Header signOutUser={signOutUser}/>
      <Container />
      <Footer />
    </div>
  )
}


export default ShopApp;