import React,{lazy,Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import { CONSTANTS} from '../../utils/constants/routesdata';
import Loader from '../../utils/widgets/Loader';
const HomePage =lazy(()=>import('../../pages/HomePage'));
const SignIn =lazy(()=>import('../../pages/SignIn'));
const SignUp = lazy(()=>import('../../pages/SignUp'));
const Wishlist =lazy(()=>import ('../../pages/Wishlist'));
const ProductCategory = lazy(()=>import('../../features/products/presentation/components/products/ProductCategory'));
const SearchResult=lazy(()=>import('../../features/products/presentation/pages/SearchResult'));
const Protected=lazy(()=>import('../../features/user/components/Protected'));
const Checkout=lazy(()=>import('../../features/user/pages/Checkout'));
const ErrorPage = lazy(()=>import('../../components/error/ErrorPage'));



const AppRoutes = () => {
  const authUser=JSON.parse(localStorage.getItem('authUser'));
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
            {/* Public Routes */}
          <Route path='/' exact index element={<HomePage/>}/>
          <Route path={CONSTANTS.SIGNIN} element={<SignIn />} />
          <Route path={CONSTANTS.SIGNUP} element={<SignUp />} />
          <Route path={CONSTANTS.WISHLIST} element={<Wishlist />} />
          <Route path='products/:category' element={<ProductCategory />} />
          <Route path='search' element={<SearchResult />} />

          {/* Protected Routes */}
          <Route element={<Protected auth={authUser} />}>
            <Route exact path={CONSTANTS.CHECKOUT} element={<Checkout />} />
          </Route>

          <Route path='*' element={<ErrorPage code={404} />} />
      </Routes> 
    </Suspense>
  )
}

export default AppRoutes