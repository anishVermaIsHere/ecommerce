import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import { CONSTANTS } from '../../../utils/constants/routesdata';


const Protected = ({auth}) => {
  const {SIGNIN}=CONSTANTS;
  return auth?<Outlet />:<Navigate to={SIGNIN} />
}

export default Protected