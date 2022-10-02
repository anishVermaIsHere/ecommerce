import './App.css';
import EcommerceApp from './App/EcommerceApp.js';
import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {app} from './utils/constants/constant-data';
import ErrorBoundary from './components/error/ErrorBoundary';
import ErrorPage from './components/error/ErrorPage';


const App=()=> {
  const star='*';
  useEffect(()=>{
    document.querySelector('#page-title').innerHTML=app.name;
  },[])
  return (
    <ErrorBoundary>
    <Router>  
      <EcommerceApp />
    </Router>
    </ErrorBoundary>
  );
}

export default App;
