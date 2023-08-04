import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cx from "./Home.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row, Button } from "react-bootstrap";
import {
  appStore,
  BackgroundHome,
  Banner1,
  Devices,
  downloadApp,
  downloadAppBg,
  fatureFrame,
  googlePlay,
  stepArrow,
  stepArrow2,
  taxi,
} from "../../../assets/images";
import {
  MdLocationPin,
  MdOutlineSupportAgent,
  MdLocationOn,
} from "react-icons/md";
import { FaUserAlt, FaCarSide, FaCalendar } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { usePlacesWidget } from "react-google-autocomplete";
import HomeFromLoction from "./HomeFromLocation";

const Home = (props: any) => {
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setPickupMaplist((prev) => {
  //       return {
  //         ...prev,
  //         lat: position?.latitude,
  //         long: position?.longitude,
  //       };
  //     });
  //   });
  // }, []);
  const navigate = useNavigate();
  const [pickupmaplist, setPickupMaplist] = useState({
    lat: 0,
    long: 0,
    formatted_address: "",
    type: "Pickup address",
  });
  //console.log(pickupmaplist,"pickupmaplist")
  const [dropmaplist, setDropMaplist] = useState({
    lat: 0,
    long: 0,
    formatted_address: "",
    type: "drop address",
  });
  //console.log(dropmaplist,"dropmaplist")
  const TransferValue = (latnew: any, longnew: any, formatted_address: any) => {
    setDropMaplist({
      lat: latnew,
      long: longnew,
      formatted_address: formatted_address,
      type: "Drop address",
    });
  };
  const { ref } = usePlacesWidget<any>({
    apiKey: "AIzaSyACOTvRgXOv5eWsgzVBWxrLrR4aOC0E_Po",
    libraries: ["places"],
    language: "en",

    onPlaceSelected: (place: any) => {
      console.log(place, "place");
      setPickupMaplist({
        lat: place.geometry.location.lat(),
        long: place.geometry.location.lng(),
        formatted_address: place.formatted_address,
        type: "Pickup address",
      });
    },
    options: {
      types: ["address"],
    },
  });
  return (
    <>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h1>TaxiMo</h1>
            <h2>Taxi Booking Made Easy</h2>
            <p>
              Taximo is an app designed to help you find local taxi easily via
              your smart phone. Just put in your pickup location and drop off
              location and send the request.
            </p>
          </div>
        </div>
        <Container className={`${cx.contentBox}`}>
          <div className={`${cx.bookingForm}`}>
            <Row>
              <Col lg={12}>
                <div className={`${st.formBox} ${st.iconForm}`}>
                  <span className={`${st.icon}`}>
                    <MdLocationOn />
                  </span>
                  <Form.Control type="text" placeholder="From" ref={ref} />
                </div>
              </Col>
              <HomeFromLoction TransferValue={TransferValue} />
              <Col lg={4} md={4}>
                <div className={`${st.formBox} mb-0`}>
                  <Button
                    onClick={() => {
                      navigate("/booking-ride", {
                        state: {
                          data: {
                            pickupAddress: pickupmaplist.formatted_address,
                            dropAddress: dropmaplist.formatted_address,
                            pickuplat: pickupmaplist.lat,
                            pickuplong: pickupmaplist.long,
                            droplat: dropmaplist.lat,
                            droplong: dropmaplist.long,
                            bookingStatus: "now",
                          },
                        },
                      });
                    }}
                    className={`btn ${st.submitBtn2} ${st.fullWidth}`}
                  >
                    Request a Taxi
                  </Button>
                </div>
              </Col>
              <Col lg={4} md={4}>
                <div className={`${st.formBox} mb-0`}>
                  <Button
                    onClick={() => {
                      navigate("/booking-ride", {
                        state: {
                          data: {
                            pickupAddress: pickupmaplist.formatted_address,
                            dropAddress: dropmaplist.formatted_address,
                            pickuplat: pickupmaplist.lat,
                            pickuplong: pickupmaplist.long,
                            droplat: dropmaplist.lat,
                            droplong: dropmaplist.long,
                            bookingStatus: "schedule",
                          },
                        },
                      });
                    }}
                    className={`btn ${st.submitBtn2} ${st.fullWidth}`}
                  >
                    Reserve a Taxi
                  </Button>
                </div>
              </Col>
              <Col lg={4} md={4}>
                <div className={`${st.formBox} mb-0`}>
                  <Button
                    onClick={() => {
                      navigate("/booking-ride", {
                        state: {
                          data: {
                            pickupAddress: pickupmaplist.formatted_address,
                            dropAddress: dropmaplist.formatted_address,
                            pickuplat: pickupmaplist.lat,
                            pickuplong: pickupmaplist.long,
                            droplat: dropmaplist.lat,
                            droplong: dropmaplist.long,
                            bookingStatus: "purchase",
                          },
                        },
                      });
                    }}
                    className={`btn ${st.submitBtn2} ${st.fullWidth}`}
                  >
                    Purchase Coupon
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Col lg={12} className={`${st.title} text-center`}>
            <div className={`${st.heading}`}>Easy 3 Step Order</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Col>
          <Row>
            <Col lg={4}>
              <div className={`${cx.stepCard}`}>
                <div className={`${cx.iconCard}`}>
                  <MdLocationPin />
                </div>
                <div className={`${cx.contentBody}`}>
                  <h4>Enter Location</h4>
                  <p>
                    Enter your pickup and drop
                    <br /> off location.
                  </p>
                </div>
                <img src={stepArrow} className={`${cx.stepArrow}`} />
              </div>
            </Col>
            <Col lg={4}>
              <div className={`${cx.stepCard}`}>
                <div className={`${cx.iconCard}`}>
                  <MdOutlineSupportAgent />
                </div>
                <div className={`${cx.contentBody}`}>
                  <h4>Request Service</h4>
                  <p>
                    The request will be sent to all the nearest local drivers.
                  </p>
                </div>
                <img src={stepArrow2} className={`${cx.stepArrow2}`} />
              </div>
            </Col>
            <Col lg={4}>
              <div className={`${cx.stepCard}`}>
                <div className={`${cx.iconCard}`}>
                  <AiFillCar />
                </div>
                <div className={`${cx.contentBody}`}>
                  <h4>Ride Now</h4>
                  <p>
                    Once the request is accept the taxi comes directly to you.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={`${cx.aboutHome}`}
        style={{ backgroundImage: `url(${BackgroundHome})` }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className={`${st.title}`}>
                <div className={`${st.heading}`}>About TaxiMo</div>
                <p>
                  Connect yourself with local taxi drivers -Taximo connects you
                  with the best local taxi drivers in your area at the quickest
                  convenience to you, so that you donâ€™t have to wait for the
                  taxi.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <img src={Devices} width="100%" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.featuredSection}`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <Row>
                <Col lg={12} className={`${st.title}`}>
                  <div className={`${st.heading}`}>TaxiMo Featured</div>
                  <p>
                    Connect yourself with local taxi drivers -Taximo connects
                    you with the best local taxi drivers in your area at the
                    quickest convenience to you, so that you donâ€™t have to
                    wait for the taxi.
                  </p>
                </Col>
                <Col lg={6}>
                  <div className={`${cx.featuredBox}`}>
                    <div className={`${cx.featuredIcon}`}>
                      <FaUserAlt />
                    </div>
                    <div className={`${cx.featuredBody}`}>
                      <h5>Profile</h5>
                      <p>
                        Your profile can be easily updated to save different
                        payment info and favorite address destinations.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${cx.featuredBox}`}>
                    <div className={`${cx.featuredIcon}`}>
                      <FaCarSide />
                    </div>
                    <div className={`${cx.featuredBody}`}>
                      <h5>Request a Ride</h5>
                      <p>
                        Taximo has location settings built in, but if you should
                        like to be picked up near by just enter the pickup
                        address.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${cx.featuredBox}`}>
                    <div className={`${cx.featuredIcon}`}>
                      <FaCalendar />
                    </div>
                    <div className={`${cx.featuredBody}`}>
                      <h5>Reserve a Ride</h5>
                      <p>
                        With Taximo you are able to reserve a ride from 1 hour
                        to 48 hours ahead of your pickup time.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${cx.featuredBox}`}>
                    <div className={`${cx.featuredIcon}`}>
                      <FaUserAlt />
                    </div>
                    <div className={`${cx.featuredBody}`}>
                      <h5>Forgotten Items</h5>
                      <p>
                        Send your request form lost item using your app for a
                        prompt recovery.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={4} className={`${cx.imgSection}`}>
              <img src={fatureFrame} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.taxiSection}`}>
        <Container>
          <img src={taxi} />
        </Container>
      </section>

      <section className={`${cx.downLoadSection}`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className={`${cx.imgBox}`}>
              <img src={downloadApp} />
            </Col>
            <Col lg={6} className={`${cx.contentBox}`}>
              <span>Download TaxiMo App</span>
              <h2>Download App on the App Store or Google Play</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <ul>
                <li>
                  <NavLink to="#" title="App Store">
                    <img src={appStore} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" title="Google Play">
                    <img src={googlePlay} />
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
