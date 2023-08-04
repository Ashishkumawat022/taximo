import React from "react";
import st from "../../../assets/stylesheet/companyStyle.module.scss";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



const PhoneNumber = () => {

  function handleOnChange(value:any) {
    
 }
  

  return (
    <>
   <PhoneInput
      country={"in"}
      inputProps={{
        name: "phone",
        required: true,
        autoFocus: false,
      }} defaultErrorMessage="It doesn't works, why?"
    />
    </>
  );
};

export default PhoneNumber;
