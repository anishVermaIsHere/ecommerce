import React, { Component } from 'react';
import { BiError } from 'react-icons/bi';
import AppConfig from '../../config/app.config';
export default class ErrorBoundary extends Component {
    
    constructor(props) {
      super(props);
      this.state = {  
        hasError:false
      };
    }
    
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
    componentDidCatch(error,info){
        //
    }
  render() {
    return this.state.hasError?
        <div>
          <div className='d-flex align-items-center justify-content-center flex-column min-vh-100 p-5 text-center'>
            <BiError style={{fontSize:'5rem',color:'red'}} />
            <h3 className='text-center'>Something went wrong...</h3>
            <p className='fs-6'>{AppConfig.appName}</p>
            <button className='mt-5 px-4 btn bg-grndrk' onClick={()=>window.location.reload(true)}>Force Reload</button>
          </div>
        </div>
        :
        this.props.children
  }
}
