import React, { Fragment, useEffect, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal, Button, Row, Tab, Nav, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import AddedCard from "../AddedCard/AddedCard";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const PayPayment = (props: any) => {
  let {
    paymentshow,
    handlepaymentClose,
    fareEstimateData,
    Getcard,
    cardlistData,
    loaderStatus,
  } = props;
  console.log(cardlistData, "cardlistDatadatat");
  const [verifyOTP, setverifyOTP] = useState(true);
  const addedcard = [1];
  function verifyOtp() {
    setverifyOTP(false);
  }
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  //----Login-validation----//
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  //----Card-validation---//
  const {
    register: cardregister,
    handleSubmit: cardhandleSubmit,
    formState: { errors: carderrors },
    reset: cardreset,
  } = useForm();
  //---react-toastify-----//
  const [timenotify, setTimenotify] = useState("");
  const [onetimenotify, setOnetimenotify] = useState(false);

  useEffect(() => {
    if (onetimenotify) {
      notify(timenotify);
      setTimeout(() => {
        setOnetimenotify(false);
      }, 1500);
    }
  }, [onetimenotify]);
  const notify = (message: String) =>
    toast(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //-------Login Api-------//
  const token = localStorage.getItem("userToken");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signin(postdata: any) {
    var data = JSON.stringify({
      email: postdata.email,
      password: postdata.password,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_WEBSITE}/Login`,
      headers: {
        os: "windows",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response, "signin");

        if (response.status == 200) {
          localStorage.setItem(
            "userData",
            JSON.stringify(response.data.data) || "{}"
          );
          localStorage.setItem(
            "userToken",
            JSON.stringify(response.data.data.login_token)
          );
          setTimenotify(response.data.reply);
          setOnetimenotify(true);
          Getcard();
          if (response.data.data.profile_status == "registered") {
            setTimeout(() => {
              navigate("/register-otp");
            }, 2000);
          } else if (response.data.data.profile_status == "complete") {
            setTimeout(() => {
              navigate("/booking-ride");
            }, 2000);
          }
        } else {
          setTimenotify(response.data.reply);
          setOnetimenotify(true);
        }
      })
      .catch(function (error) {
        if (error.response.status == 400 || 404 || 500) {
          setTimenotify(error.response.data.reply);
          setOnetimenotify(true);
        } else {
          notify("User not Registered");
        }
      });
  }

  //----------Add card Api---------//
  const [number, setnumber] = useState("");
  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [activeKey, setActiveKey] = useState("paymentTab1");
  const date:any= new Date()
  function AddCard(postdata: any) {
    let newdate =  postdata.newdate.split("-");
  
    var data = JSON.stringify({
      number: postdata.number,
      month: newdate[1],
      year: newdate[0],
      cvc: postdata.cvv,
      name: postdata.name,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_PAYMENTS}/add_card`,
      headers: {
        Authorization: JSON.parse(localStorage.getItem("userToken")!),
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response, "add_card");
        setActiveKey("paymentTab1");
        Getcard();
        cardreset()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //------------//-------//
  return (
    <>
      <ToastContainer />
      {token ? (
        <Modal
          centered
          scrollable
          show={paymentshow}
          onHide={() => {
            handlepaymentClose();
            setverifyOTP(true);
          }}
          className={`${m.modalCts} ${m.paymentTab}`}
        >
          <Modal.Header>
            <Modal.Title>Payment</Modal.Title>
            <button
              className={`${m.closeIcon}`}
              title="Close"
              onClick={() => {
                handlepaymentClose();
                setverifyOTP(true);
              }}
            >
              <MdClose />
            </button>
          </Modal.Header>
          <Modal.Body>
            {/* {verifyOTP ?  */}
            <Fragment>
              {" "}
              <h5 className="mb-3">
                Total Pay : $ {fareEstimateData?.total_fare}
              </h5>
              <Tab.Container activeKey={activeKey}>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="paymentTab1"
                      onClick={() => setActiveKey("paymentTab1")}
                    >
                      Added Card
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="paymentTab2"
                      onClick={() => setActiveKey("paymentTab2")}
                    >
                      Add New Card
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="paymentTab1">
                    <AddedCard
                      cardlistData={cardlistData}
                      loaderStatus={loaderStatus}
                      Getcard={Getcard}
                    />

                    {/* <Col lg={12}>
                    <div className={`${st.formBox} text-center mb-0 mt-2`}>
                      <button className={`btn ${st.submitBtn}`} onClick={verifyOtp}>Submit</button>
                    </div>
                  </Col> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="paymentTab2">
                    
                      <Form onSubmit={cardhandleSubmit(AddCard)}>
                      <Row>
                        <Col lg={12}>
                          <div className={`${st.formBox}`}>
                            <label>Card Number</label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              {...cardregister("number", {
                                required: "required*",
                                minLength: {
                                  value: 8,
                                  message: "Please enter minimum 8 characters",
                                },
                              })}
                            />
                            {carderrors?.number?.type === "minLength" && (
                              <span style={{ color: "#fbbf15" }}>
                                Enter minimum 8 characters
                              </span>
                            )}
                            {carderrors?.number?.type === "required" && (
                              <span style={{ color: "#fbbf15" }}>
                                required*
                              </span>
                            )}
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className={`${st.formBox}`}>
                            <label>Card Holder's Name</label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              {...cardregister("name", {
                                required: "This password is required",
                              })}
                            />
                            {carderrors?.name?.type === "required" && (
                              <p style={{ color: "#fcc014" }}>required*</p>
                            )}
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className={`${st.formBox}`}>
                            <label>Expiry</label>
                            <Form.Control
                              type="month"
                              placeholder=""
                              {...cardregister("newdate", {
                                required: "This password is required",
                              })}
                              //min={date}
                            />
                             {carderrors?.newdate?.type === "required" && (
                              <p style={{ color: "#fcc014" }}>required*</p>
                            )}
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className={`${st.formBox}`}>
                            <label>CVV</label>
                            <Form.Control
                              type="number"
                              placeholder=""
                              className={`${st.removeArrow}`}
                              {...cardregister("cvv", {
                                required: "required*",
                                minLength: {
                                  value: 3,
                                  message: "enter minimum 3 characters",
                                },
                              })}
                            />
                            {carderrors?.cvv?.type === "minLength" && (
                              <span style={{ color: "#fbbf15" }}>
                                 Enter minimum 3 characters
                              </span>
                            )}
                            {carderrors?.cvv?.type === "required" && (
                              <span style={{ color: "#fbbf15" }}>
                                required*
                              </span>
                            )}
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div
                            className={`${st.formBox} text-center mb-0 mt-2`}
                          >
                            <button
                              type="submit"
                              className={`btn ${st.submitBtn}`}
                            >
                              Submit
                            </button>
                          </div>
                        </Col>
                        </Row>
                      </Form>
                   
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Fragment>
            {/* : <Fragment> <h6 className="mb-3">OTP has been sent your registred phone number XXXXXXXX98</h6> */}
            {/* <Col lg={12}>
              <div className={`${st.formBox}`}>
                <Form.Control type="number" placeholder="OTP" className={`${st.removeArrow}`} />
              </div>
            </Col> */}
            {/* <Col lg={12}>
              <div className={`${st.formBox} text-center mb-0 mt-2`}>
                <NavLink to="/success" className={`btn ${st.submitBtn}`}>Submit</NavLink>
              </div>
            </Col> */}
            {/* </Fragment> */}
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          centered
          scrollable
          show={paymentshow}
          onHide={() => {
            handlepaymentClose();
          }}
          className={`${m.modalCts} ${m.paymentTab}`}
        >
          <Form onSubmit={handleSubmit(signin)}>
            <Modal.Header closeButton>
              <Modal.Title>Login to Your Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row>
                <Col lg={12}>
                  <div className={`${st.formBox}`}>
                    <label>Email</label>
                    <div className="position-relative">
                      <input
                        placeholder="Email*"
                        className="form-control"
                        {...register("email", {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                      />
                    </div>
                    {errors?.email?.type === "pattern" && (
                      <span style={{ color: "#fbbf15" }}>
                        Invalid email addres
                      </span>
                    )}
                    {errors?.email?.type === "required" && (
                      <span style={{ color: "#fbbf15" }}>
                        This field is required
                      </span>
                    )}
                  </div>
                </Col>
                <Col lg={12}>
                  <div className={`${st.formBox}`}>
                    <label>Password</label>
                    <div className="position-relative">
                      <input
                        placeholder="password*"
                        className="form-control"
                        type={show ? "password" : "text"}
                        {...register("password", {
                          required: "This password is required",
                          minLength: {
                            value: 6,
                            message: "Please enter minimum 6 characters",
                          },
                        })}
                      />

                      {show ? (
                        <AiFillEyeInvisible
                          className={`${st.eyeIcon}`}
                          onClick={() => {
                            setShow(false);
                          }}
                        />
                      ) : (
                        <AiFillEye
                          className={`${st.eyeIcon}`}
                          onClick={() => {
                            setShow(true);
                          }}
                        />
                      )}
                    </div>
                    {errors?.password?.type === "minLength" && (
                      <span style={{ color: "#fbbf15" }}>
                        Please enter minimum 6 characters
                      </span>
                    )}
                    {errors?.password?.type === "required" && (
                      <span style={{ color: "#fbbf15" }}>
                        This field is required
                      </span>
                    )}
                    <div className={`${st.forgotPassword}`}>
                      <NavLink to="/forgot-password">Forgot Password?</NavLink>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>

            <Modal.Footer>
              <div className={`${st.formBox} mb-0 mt-3 text-center`}>
                <Button
                  type="submit"
                  className={`btn ${st.submitBtn} ${st.fullWidth}`}
                >
                  Submit
                </Button>
                <p className="mb-3">
                  Don't have an account?{" "}
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </p>
                <p>
                  Register your company account{" "}
                  <NavLink to="/become-company">Sign Up</NavLink>
                </p>
              </div>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default PayPayment;
