import React, {useEffect} from 'react';
import './App.css';
import ShopApp from './App/ShopApp.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {app} from './utils/constants/constant-data';
import ErrorBoundary from './components/error/ErrorBoundary';


const App=()=> {
  useEffect(()=>{
    document.querySelector('#page-title').innerHTML=app.name;
  },[])
  return (
    <ErrorBoundary>
      <Router>  
        <ShopApp />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
