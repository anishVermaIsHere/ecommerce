import React from 'react'
import '../../App.css';
import Socialfollow from '../common/Socialfollow';

const Footer = () => {
    const dt=new Date();
    const year=dt.getFullYear();

    return (
        <footer className="w-100 text-center" style={{backgroundColor:'var(--fadelight)', bottom:'0'}}>
            {/*  Grid container  */}
            <div className="container p-4 pb-0">
                {/*  Section: Form  */}
                <section className="">
                    <form action="">
                        {/* Grid row */}
                        <div className="row d-flex justify-content-center">
                            {/* Grid column */}
                            <div className="col-auto">
                                <p className="pt-2">
                                    Sign up for our newsletter
                                </p>
                            </div>

                            {/* Grid column */}
                            <div className="col-md-5 col-12">
                                {/*  Email input  */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form5Example27" className="form-control" placeholder='Email address'/>
                                    {/* <label className="form-label" for="form5Example27">Email address</label> */}
                                </div>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-auto">
                                {/*  Submit button  */}
                                <button type="submit" className="btn bg-grndrk mb-4">
                                    Subscribe
                                </button>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </form>
                </section>
                {/*  Section: Form  */}
            </div>
            {/*  Grid container  */}
            <div className='container-fluid'>
                <Socialfollow />
            </div>
            {/*  Copyright  */}
            <div className="pt-2 d-flex-jc-center-ai-center" style={{background:'var(--darkgreen)', color:'#fff'}}>
                <p className='copyright-text'>
                © {year} 
                 <span className='ml-2'>e-Store. </span>
                All Rights Reserved <br/>
               Designed and Developed by Anish Verma</p> 
            </div>
            {/*  Copyright  */}
        </footer>
    )
}

export default Footer