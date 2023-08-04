import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "../UserProfile.module.scss";
import lx from "./Coupons.module.scss";
import st from "../../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import { Usermenu } from "../../../../components/Website";
import { Banner1 } from "../../../../assets/images";


const Coupons = (props: any) => {

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
                    <h5>Coupons</h5>
                    <NavLink to="/booking-ride" className={`btn ${cx.addNew}`} >Create Coupon</NavLink>
                  </Col>

                  <div className={`${cx.contentInside}`}>
                    <Row>
                      <Col lg={12}>
                        <div className={`${lx.couponBox}`}>
                          <div className={`${lx.background}`}>
                            <Row>
                              <Col lg={8}>
                                <ul className={`${lx.location}`}>
                                  <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                  <li>Rawan Gate, Jhothawara</li>
                                </ul>
                                <small>This Coupon is valid 28/02/2023</small>
                              </Col>
                              <Col lg={4} className="text-end">
                                <div className={`${lx.code}`}>TAXI265RIDE</div><br/>
                                <NavLink className={`btn ${lx.rideBtn}`} to="/success">Start Ride </NavLink>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className={`${lx.couponBox}`}>
                          <div className={`${lx.background}`}>
                            <Row>
                              <Col lg={8}>
                                <ul className={`${lx.location}`}>
                                  <li>11/61, Madhyam Marg, Kaveri Path, Mansarovar Sector 1, Mansarovar, Jaipur, Rajasthan 302020</li>
                                  <li>Rawan Gate, Jhothawara</li>
                                </ul>
                                <small>This Coupon is valid 28/02/2023</small>
                              </Col>
                              <Col lg={4} className="text-end">
                                <div className={`${lx.code}`}>TAXI265RIDE</div><br/>
                                <NavLink className={`btn ${lx.rideBtn}`} to="/success">Start Ride </NavLink>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    </Row>
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

export default Coupons;
