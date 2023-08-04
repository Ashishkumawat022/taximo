import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./BecomeDriver.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Checkbox } from "../../../components/Website/Forms";


const BecomeDriver = (props: any) => {
  const [show, setShow] = useState(true);
  const [show2, set2Show] = useState(true);

  return (
    <>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Become a Driver</h2>
          </div>
        </div>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={9} className={`m-auto`}>
              <div className={`${cx.loginForm}`}>
                 <div className={`${cx.contentBody}`}>
                  <h3>Become a Driver</h3>
                  <Form>
                    <Row>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Select Zones </label>
                          <Form.Select>
                            <option >Select Zones</option>
                            <option >Rajasthan , india </option>
                            <option >United States , 28023</option>
                            <option >Sichun , China </option>
                            <option >England</option>
                          </Form.Select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Select Sub Zone </label>
                          <Form.Select>
                            <option >Select Sub Zone</option>
                            <option >Jaipur</option>
                            <option >Jodhpur </option>
                            <option >Ajmer</option>
                          </Form.Select>
                        </div>
                      </Col>
                     
                    
                      
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>First Name </label>
                          <Form.Control type="text" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Last Name </label>
                          <Form.Control type="text" /> 
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Email </label>
                          <Form.Control type="email" />
                        </div>
                      </Col>
                      
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Contact Number </label>
                          <Form.Control type="number" className={`${st.removeArrow}`}/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Emergency Contact Number </label>
                          <Form.Control type="number" className={`${st.removeArrow}`}/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Driving Licence Number  </label>
                          <Form.Control type="number" className={`${st.removeArrow}`}/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Company Name   </label>
                          <Form.Control type="text"/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Driver Work Permit No  </label>
                          <Form.Control type="number" className={`${st.removeArrow}`}/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Date</label>
                          <Form.Control type="date"/>
                        </div>
                      </Col>
                     
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Upload Licence  <span className="text-danger">*</span></label>
                          <Form.Control type="file" className="px-4"/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Upload Photo  <span className="text-danger">*</span></label>
                          <Form.Control type="file" className="px-4"/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Document Title  </label>
                          <Form.Control type="text"/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Upload Permit photo  <span className="text-danger">*</span></label>
                          <Form.Control type="file" className="px-4"/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Upload Document <span className="text-danger">*</span> </label>
                          <Form.Control type="file" className={`px-4`}/>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <label>Residential Address</label>
                          <Form.Control  type="text" as={"textarea"} rows={2} placeholder="Residential Address"/>
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

export default BecomeDriver;
