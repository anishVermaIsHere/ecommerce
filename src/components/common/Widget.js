import React from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Widget({ title, data }) {
  const banners = data;
  
  const titleStyle = {
    flexBasis: "100%",
    margin: "0.6rem 0.5rem",
    color: "var(--fadedrk)",
    fontSize: "1.3rem",
    fontWeight: "bold",
  };

  return (
    <div className="row mb-4">
      <div className="col-12">
        <h5 style={titleStyle}>{title}</h5>
      </div>
      {banners?.map((ban) => {
        return (
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-4"
            key={nanoid()}
          >
            <NavLink to="#">
              <img src={ban?.url} alt={ban?.alt} loading="lazy" />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
