import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ROUTES from "../../../routes/route-links";

const Protected = ({ auth }) => {
  const { SIGNIN } = ROUTES;
  return auth ? <Outlet /> : <Navigate to={SIGNIN} />;
};

export default Protected;
