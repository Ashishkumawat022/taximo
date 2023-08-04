import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Home.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row } from "react-bootstrap";
import { appStore, BackgroundHome, Banner1, Devices, downloadApp, downloadAppBg, fatureFrame, googlePlay, stepArrow, stepArrow2, taxi } from "../../../assets/images";
import { MdLocationPin,MdOutlineSupportAgent,MdLocationOn } from 'react-icons/md';
import { usePlacesWidget } from "react-google-autocomplete";

const HomeFromLoction = (props: any) => {
    let {TransferValue} = props;
    //----------//
     const { ref } = usePlacesWidget<any>({
       apiKey: "AIzaSyACOTvRgXOv5eWsgzVBWxrLrR4aOC0E_Po",
       libraries: ["places"],
       language: "en",
   
       onPlaceSelected: (place: any) => {
         console.log(place, "place");
         TransferValue(place.geometry.location.lat(),place.geometry.location.lng(), place.formatted_address)
       },
       options: {
         types: ["address"],
       },
     });
    //----//
   
  return (
    <>
     
              <Col lg={12}>
                <div className={`${st.formBox} ${st.iconForm}`}>
                  <span className={`${st.icon}`}><MdLocationOn /></span>
                  <Form.Control type="text" placeholder="To" 
                   ref={ref}
                   />
                </div>
              </Col>
    </>
  );
};

export default HomeFromLoction;
