import React, { Fragment, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "../../../assets/stylesheet/companyStyle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./EditProfile.module.scss";
import table from "../../../assets/stylesheet/datatable.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown, Tab, Tabs } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


export default function EditProfile() {


  const [show, setShow] = useState(true);
  const [show2, set2Show] = useState(true);
  const [show3, set3Show] = useState(true);

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Profile</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.editProfile}`}>
              <Tabs
                defaultActiveKey="profile"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
              >
                <Tab eventKey="profile" title="Profile">

                  <div className={`${cx.contentBox}`}>
                    <Row>
                      <Col lg={7}>
                        <div className={`${st.formBox}`}>
                          <label>Name</label>
                          <Form.Control type="text" placeholder="" value="Jitendra Kumar" />
                        </div>
                      </Col>
                      <Col lg={7}>
                        <div className={`${st.formBox}`}>
                          <label>Email</label>
                          <Form.Control type="text" placeholder="" value="admin@gmail.com" disabled />
                        </div>
                      </Col>
                      <Col lg={7}>
                        <div className={`${st.formBox}`}>
                          <label>Phone Number</label>
                          <Form.Control type="number" className={`${st.removeArrow}`} placeholder="" />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <button className={`btn ${st.submitBtn}`}>Submit</button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey="changepassword" title="Change Password">

                  <div className={`${cx.contentBox}`}>
                    <Row>

                      <Col lg={7}>
                        <div className={`${st.formBox}`}>
                          <label>Old Password</label>
                          <div className="position-relative">
                            <input className="form-control"
                              type={show3 ? "password" : "text"} />{show3 ? (
                                <AiFillEye className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    set3Show(false);
                                  }}
                                />
                              ) : (
                                <AiFillEyeInvisible className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    set3Show(true);
                                  }}
                                />
                              )}
                          </div>
                        </div>
                      </Col>
                      <Col lg={7}>
                        <div className={`${st.formBox}`}>
                          <label>Password</label>
                          <div className="position-relative">
                            <input className="form-control"
                              type={show ? "password" : "text"} />{show ? (
                                <AiFillEye className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    setShow(false);
                                  }}
                                />
                              ) : (
                                <AiFillEyeInvisible className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    setShow(true);
                                  }}
                                />
                              )}
                          </div>
                        </div>
                      </Col>

                      <Col lg={7}>
                        <div className={`${st.formBox}`}>
                          <label>Confirm Password</label>
                          <div className="position-relative">
                            <input className="form-control"
                              type={show2 ? "password" : "text"} />{show2 ? (
                                <AiFillEye className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    set2Show(false);
                                  }}
                                />
                              ) : (
                                <AiFillEyeInvisible className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    set2Show(true);
                                  }}
                                />
                              )}
                          </div>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <button className={`btn ${st.submitBtn}`}>Submit</button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>
              </Tabs>

            </Card.Body>
          </Card>
        </div>
      </section>


    </>
  );
}
