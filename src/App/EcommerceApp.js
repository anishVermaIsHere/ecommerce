import React, {useState, useEffect, useContext} from 'react';
import '../App.css';
import {useNavigate, useLocation } from 'react-router-dom';
import {auth} from '../utils/services/auth/firebaseConfig';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";  
import Header from '../components/header/Header'
import Container from '../container/Container';
import Footer from '../components/footer/Footer';

export default function EcommerceApp(props) {
  const [user,setUser]=useState(null);

  const navigate=useNavigate();
  const location=useLocation();
  
  const signOutUser=()=>{
    signOut(auth).then(() => {
    // Sign-out successful.
      setUser(null);
      navigate('/signin')
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUser=auth.currentUser;
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
      <Header  user={user} signOutUser={signOutUser}/>
      <Container />
      <Footer />
    </div>
  )
}
