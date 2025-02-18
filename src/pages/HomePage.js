import React from "react";
import Slider from "../components/home/Slider";
import Widget from "../components/common/Widget";
import Category from "../components/home/Category";
import { slider, widgets } from "../utils/constants/constant-data";

const HomePage = () => {
  let random = slider.filter((ele) => ele.alt === "random");
  return (
    <>
      <Slider title={"random"} data={random} />
      <div className="container-fluid" style={{ fontFamily: "var(--fontsec)" }}>
        <Category />
        <div className="">
          <Widget title="Offers on Foods & Groceries" data={widgets.foods} />
          <Widget title="Offers on Fashion" data={widgets.fashion} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
