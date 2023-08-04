import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./PrivacyPolicy.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Checkbox } from "../../../components/Website/Forms";


const PrivacyPolicy = (props: any) => {
  const [show, setShow] = useState(true);
  const [show2, set2Show] = useState(true);

  return (
    <>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Privacy Policy</h2>
          </div>
        </div>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={12} className={`m-auto`}>
              <div className={`${cx.loginForm}`}>
                <div className={`${cx.contentBody}`}>
                  <h3>Privacy Policy</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil corrupti, 
                    expedita minima eaque explicabo maxime distinctio unde officiis doloribus 
                    vitae eveniet fugit cumque! Minima sequi fuga molestias nisi suscipit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil corrupti, 
                    expedita minima eaque explicabo maxime distinctio unde officiis doloribus 
                    vitae eveniet fugit cumque! Minima sequi fuga molestias nisi suscipit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil corrupti, 
                    expedita minima eaque explicabo maxime distinctio unde officiis doloribus 
                    vitae eveniet fugit cumque! Minima sequi fuga molestias nisi suscipit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil corrupti, 
                    expedita minima eaque explicabo maxime distinctio unde officiis doloribus 
                    vitae eveniet fugit cumque! Minima sequi fuga molestias nisi suscipit.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil corrupti, 
                    expedita minima eaque explicabo maxime distinctio unde officiis doloribus 
                    vitae eveniet fugit cumque! Minima sequi fuga molestias nisi suscipit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil corrupti, 
                    expedita minima eaque explicabo maxime distinctio unde officiis doloribus 
                    vitae eveniet fugit cumque! Minima sequi fuga molestias nisi suscipit.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil corrupti, 
                    expedita minima eaque explicabo maxime distinctio unde officiis doloribus 
                    vitae eveniet fugit cumque! Minima sequi fuga molestias nisi suscipit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil corrupti, 
                    expedita minima eaque explicabo maxime distinctio unde officiis doloribus 
                    vitae eveniet fugit cumque! Minima sequi fuga molestias nisi suscipit.
                  </p>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
