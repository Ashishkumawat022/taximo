import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "../UserProfile.module.scss";
import lx from "./Rides.module.scss";
import st from "../../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row, Tab, Nav, Tabs } from "react-bootstrap";
import { Usermenu } from "../../../../components/Website";
import { Banner1 } from "../../../../assets/images";


const Rides = (props: any) => {

  return (
    <>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Dashboard</h2>
          </div>
        </div>
      </section>
      <section className={`${cx.complete_profile}`}>
        <Container>
          <form className={`${cx.login_form}`}>
            <Row>
              <Col md={3}>
                <Usermenu />
              </Col>

              <Col md={9}>
                <div className={`${cx.contentBody}`}>
                  <Col md={12} className={`${cx.profileTitle}`}>
                    <h5>Rides</h5>
                  </Col>
                  <div className={`${cx.contentInside} ${lx.rideHistory}`}>
                    <Tab.Container defaultActiveKey="radeTab1">
                      <Row>
                        <Col sm={3}>
                          <Nav variant="pills" className={`flex-column`}>
                            <Nav.Item>
                              <Nav.Link eventKey="radeTab1">Upcoming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="radeTab2">Past</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="radeTab1" className={`${lx.filterMenu}`}>
                              <Tabs defaultActiveKey="scheduled" >
                                <Tab eventKey="scheduled" title="Scheduled">
                                  <Row>
                                    <Col lg={12}>
                                      <div className={`${lx.rideBox}`}>
                                        <div className={`${lx.background}`}>
                                          <Row>
                                            <Col lg={8}>
                                              <ul className={`${lx.location}`}>
                                                <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                                <li>Rawan Gate, Jhothawara</li>
                                              </ul>
                                              <small>27-02-2022 - 12:02 PM</small>
                                            </Col>
                                            <Col lg={4} className="text-end">
                                              <h5 className="mb-0">$ 23</h5>
                                              <NavLink className={`btn ${lx.rideBtn}`} to="#" style={{ background:'#f4b70c' }}>Schedule</NavLink>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg={12}>
                                      <div className={`${lx.rideBox}`}>
                                        <div className={`${lx.background}`}>
                                          <Row>
                                            <Col lg={8}>
                                              <ul className={`${lx.location}`}>
                                                <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                                <li>Rawan Gate, Jhothawara</li>
                                              </ul>
                                              <small>27-02-2022 - 12:02 PM</small>
                                            </Col>
                                            <Col lg={4} className="text-end">
                                              <h5 className="mb-0">$ 23</h5>
                                              <NavLink className={`btn ${lx.rideBtn}`} to="#" style={{ background:'#f4b70c' }}>Schedule</NavLink>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </Tab>
                                <Tab eventKey="reserved" title="Reserved">
                                <Row>
                                    <Col lg={12}>
                                      <div className={`${lx.rideBox}`}>
                                        <div className={`${lx.background}`}>
                                          <Row>
                                            <Col lg={8}>
                                              <ul className={`${lx.location}`}>
                                                <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                                <li>Rawan Gate, Jhothawara</li>
                                              </ul>
                                              <small>27-02-2022 - 12:02 PM</small>
                                            </Col>
                                            <Col lg={4} className="text-end">
                                              <h5 className="mb-0">$ 23</h5>
                                              <NavLink className={`btn ${lx.rideBtn}`} to="#" style={{ background:'#f4b70c' }}>Reserve</NavLink>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg={12}>
                                      <div className={`${lx.rideBox}`}>
                                        <div className={`${lx.background}`}>
                                          <Row>
                                            <Col lg={8}>
                                              <ul className={`${lx.location}`}>
                                                <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                                <li>Rawan Gate, Jhothawara</li>
                                              </ul>
                                              <small>27-02-2022 - 12:02 PM</small>
                                            </Col>
                                            <Col lg={4} className="text-end">
                                              <h5 className="mb-0">$ 23</h5>
                                              <NavLink className={`btn ${lx.rideBtn}`} to="#" style={{ background:'#f4b70c' }}>Reserve</NavLink>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </Tab>
                              </Tabs>

                            </Tab.Pane>
                            <Tab.Pane eventKey="radeTab2" className={`${lx.filterMenu}`}>
                              
                            <Tabs defaultActiveKey="finished" >
                                <Tab eventKey="finished" title="Finished">
                                  <Row>
                                    <Col lg={12}>
                                      <div className={`${lx.rideBox}`}>
                                        <div className={`${lx.background}`}>
                                          <Row>
                                            <Col lg={8}>
                                              <ul className={`${lx.location}`}>
                                                <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                                <li>Rawan Gate, Jhothawara</li>
                                              </ul>
                                              <small>27-02-2022 - 12:02 PM</small>
                                            </Col>
                                            <Col lg={4} className="text-end">
                                              <h5 className="mb-0">$ 23</h5>
                                              <NavLink className={`btn ${lx.rideBtn}`} to="#" style={{ background:'#358a01' }}>Completed</NavLink>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg={12}>
                                      <div className={`${lx.rideBox}`}>
                                        <div className={`${lx.background}`}>
                                          <Row>
                                            <Col lg={8}>
                                              <ul className={`${lx.location}`}>
                                                <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                                <li>Rawan Gate, Jhothawara</li>
                                              </ul>
                                              <small>27-02-2022 - 12:02 PM</small>
                                            </Col>
                                            <Col lg={4} className="text-end">
                                              <h5 className="mb-0">$ 23</h5>
                                              <NavLink className={`btn ${lx.rideBtn}`} to="#" style={{ background:'#358a01' }}>Completed</NavLink>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </Tab>
                                <Tab eventKey="cancelled" title="Cancelled">
                                <Row>
                                    <Col lg={12}>
                                      <div className={`${lx.rideBox}`}>
                                        <div className={`${lx.background}`}>
                                          <Row>
                                            <Col lg={8}>
                                              <ul className={`${lx.location}`}>
                                                <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                                <li>Rawan Gate, Jhothawara</li>
                                              </ul>
                                              <small>27-02-2022 - 12:02 PM</small>
                                            </Col>
                                            <Col lg={4} className="text-end">
                                              <h5 className="mb-0">$ 23</h5>
                                              <NavLink className={`btn ${lx.rideBtn}`} to="#" style={{ background:'#e60505' }}>Cancelled</NavLink>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg={12}>
                                      <div className={`${lx.rideBox}`}>
                                        <div className={`${lx.background}`}>
                                          <Row>
                                            <Col lg={8}>
                                              <ul className={`${lx.location}`}>
                                                <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                                <li>Rawan Gate, Jhothawara</li>
                                              </ul>
                                              <small>27-02-2022 - 12:02 PM</small>
                                            </Col>
                                            <Col lg={4} className="text-end">
                                              <h5 className="mb-0">$ 23</h5>
                                              <NavLink className={`btn ${lx.rideBtn}`} to="#" style={{ background:'#e60505' }}>Cancelled</NavLink>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </Tab>
                              </Tabs>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Rides;
