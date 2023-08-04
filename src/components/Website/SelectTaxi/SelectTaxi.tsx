import React from "react";
import cx from "./SelectTaxi.module.scss";
import { NavLink } from "react-router-dom";
import { taxi1 } from "../../../assets/images";

const SelectTaxi = (props: any) => {
  let {categoriesData,GetFareEstimate} = props;
   //console.log(categoriesData,"categoriesData")
  return (
    <>
     
      {
      categoriesData.length > 0 &&
      categoriesData?.map((item: any) => {
      return (
      <>
       <button className={`${cx.selectTaxi}`} onClick={()=>{GetFareEstimate(item._id)}}>
        <img src={item.thumb_2x} />
        <div className={`${cx.taxiTypeBody}`}>
          <h5>{item.title}</h5>
        </div>
        </button>
      </>
        );
    })}
    </>
  );
};

export default SelectTaxi;
