import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./BecomeCompany.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Checkbox } from "../../../components/Website/Forms";


const BecomeCompany = (props: any) => {
  const [show, setShow] = useState(true);
  const [show2, set2Show] = useState(true);

  return (
    <>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Become a Company</h2>
          </div>
        </div>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={9} className={`m-auto`}>
              <div className={`${cx.loginForm}`}>
                 <div className={`${cx.contentBody}`}>
                  <h3>Become a Company</h3>
                  <Form>
                    <Row>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Enter Company Name</label>
                          <Form.Control type="text"  />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Company Type</label>
                          <Form.Select>
                            <option >Company Type</option>
                          </Form.Select>
                        </div>
                      </Col>
                    
                      
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Number of employees </label>
                          <Form.Control type="number" />
                        </div>
                      </Col>
                      
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Company Registration Number </label>
                          <Form.Control type="number"/>
                        </div>
                      </Col>
                     
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Country</label>
                          <Form.Control type="text" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>State</label>
                          <Form.Control type="text" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>City</label>
                          <Form.Control type="text" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Postal Code </label>
                          <Form.Control type="number" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Address </label>
                          <Form.Control type="text" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Verification Document</label>
                          <Form.Control type="file" className="px-4"/>
                        </div>
                      </Col>
                     
                      
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <label className={`${st.checkbox}`}>
                            <Checkbox />
                            You are agree our <NavLink target="_blank" to="/terms-and-conditions">Terms & Conditions</NavLink>
                          </label>
                        </div>
                      </Col>
                      <Col lg={5} className="m-auto">
                        <div className={`${st.formBox} mb-0`}>
                          <NavLink to="/otp" className={`btn ${st.submitBtn} ${st.fullWidth}`}>Submit</NavLink>
                        </div>
                      </Col>
                    </Row>

                  </Form>
                  
                 </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BecomeCompany;
