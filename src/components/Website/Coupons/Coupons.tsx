import React from "react";
import cx from "./Coupons.module.scss";
import { NavLink } from "react-router-dom";
import { taxi1 } from "../../../assets/images";

const Coupons = (props: any) => {
  return (
    <>
      <button className={`${cx.couponCode}`}>
        <div className={`${cx.couponBody}`}>
          <h5>20% OFF</h5>
          <p>Get 20% Off</p>
          <p>TAXIMO - <span>TAXI005R</span></p>
        </div>

        <div className={`${cx.applyBody}`}>
          <button className={`btn ${cx.applyBtn}`}>Apply</button>
        </div>
      </button>
    </>
  );
};

export default Coupons;
