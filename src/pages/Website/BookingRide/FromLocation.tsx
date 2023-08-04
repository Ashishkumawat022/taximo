import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./BookingRide.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row } from "react-bootstrap";
import { MdLocationOn, MdAccessTimeFilled } from 'react-icons/md';
import { usePlacesWidget } from "react-google-autocomplete";
import axios from "axios";
interface BookingDetails {
  from?: string,
  to?: string
}

const FromLocation = (props: any) => {
  let {TransferValue,DropData} = props;
 //----------//
  const { ref } = usePlacesWidget<any>({
    apiKey: "AIzaSyACOTvRgXOv5eWsgzVBWxrLrR4aOC0E_Po",
    libraries: ["places"],
    language: "en",

    onPlaceSelected: (place: any) => {
     // console.log(place, "place");
      TransferValue(place.geometry.location.lat(),place.geometry.location.lng(), place.formatted_address)
    },
    options: {
      types: ["address"],
    },
  });
 //----//

  //-------------//---------------//
  return (
    <>
              <Col lg={12}>
                <div className={`${st.formBox} ${st.iconForm}`}>
                  <span className={`${st.icon}`}><MdLocationOn /></span>
                  <Form.Control 
                  type="text" 
                  placeholder="To"
                  ref={ref}
                  defaultValue={DropData}
                  />
                </div>
              </Col>


                </>
  );
};

export default FromLocation;
