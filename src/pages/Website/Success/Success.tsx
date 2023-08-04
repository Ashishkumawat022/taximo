import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Success.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import {  Banner1 } from "../../../assets/images";
import { AiFillCheckCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Success = (props: any) => {

  const [show, setShow] = useState(true);

  return (
    <>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
        </div>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={5} className={`m-auto`}>
              <div className={`${cx.successPage}`}>
                 <AiFillCheckCircle className={`${cx.check}`} />
                  <h5>Payment Successfull !</h5>
                  <NavLink className={`btn ${cx.rideBtn}`} to="#">Go to New Ride</NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Success;
