import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Wishlist from '../../pages/Wishlist';
import HomePage from '../../pages/HomePage';
import Product from '../../features/products/presentation/pages/Product';
import ProductCategory from '../../features/products/presentation/components/products/ProductCategory';
import ErrorPage from '../../components/error/ErrorPage';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import Checkout from '../../features/user/pages/Checkout';
import { CONSTANTS, URL_PATH} from '../constants/routesdata';


const Routing = () => {
  return (
    <Routes>
            {/* constants path */}
        <Route index element={<HomePage/>}/>
        <Route path={CONSTANTS.HOME} element={<HomePage />} />
        <Route path={CONSTANTS.SIGNIN} element={<Login />} />
        <Route path={CONSTANTS.SIGNUP} element={<SignUp />} />
        <Route path={CONSTANTS.WISHLIST} element={<Wishlist />} />
        <Route path={CONSTANTS.PRODUCTS} element={<Product />} />
        <Route path={CONSTANTS.CHECKOUT} element={<Checkout />} />
        <Route path='*' element={<ErrorPage code={404} />} />
          {/* nested paths */}
          { URL_PATH.map(page=><Route path={page.route} element={<ProductCategory routeData={page} />} />) }
    </Routes> 
  )
}

export default Routing