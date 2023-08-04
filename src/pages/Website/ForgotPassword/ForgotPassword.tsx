import React, { useEffect, useState } from "react";
import cx from "./ForgotPassword.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button, Tab,Nav } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const ForgotPassword = (props: any) => {
 const[mobile, setmobile] = useState("");
 const [DialCode, setDialCode] = useState("");
 const [cuntrycode, setcuntrycode] = useState("");

 function phoneInput(value: any, data: any) {
   //console.log(value, data, "phoneInput");
   let number= data.dialCode.length
   setmobile(value.slice(number));
   setDialCode(`+${data.dialCode}`);
   setcuntrycode(`${data.countryCode}`);
 }
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [timenotify, setTimenotify] = useState("");
  const [onetimenotify, setOnetimenotify] = useState(false);
  useEffect(() => {
    if (onetimenotify) {
      notify(timenotify);
      setTimeout(() => {
        setOnetimenotify(false);
      }, 5000);
    }
  }, [onetimenotify]);
  //----validation----//
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  //---react-toastify-----//
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
  //forgotPassword Api For Email  //--------
  function forgotPassword(postdata: any) {
    var data = JSON.stringify({
      "field_type": "email",
      email: postdata.email,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_WEBSITE}/forgot_password`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
         //console.log(response, "forgotPassword");
        if (response.status ==  200 ) {
          setTimenotify(response.data.reply);
          setOnetimenotify(true);
          setTimeout(() => {
            navigate("/otp", {
              state: { 
                data: {
                  userId: response.data.data.user_id,
                 "field_type": "email",
                 email: postdata.email,
                 country_code:"",
                 mobile:"",
                  },
             },
            });
          }, 1000);
        } else if (response.status ==   203) {
          setTimenotify(response.data.reply);
          setOnetimenotify(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //forgotPassword Api For Mobile  //--------
  function MobileforgotPassword() {
    var data = JSON.stringify({
      "field_type": "mobile",
        country_code:DialCode,
        mobile:mobile,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_WEBSITE}/forgot_password`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
         console.log(response, "MobileforgotPassword");
        if (response.status ==  200 ) {
          setTimenotify(response.data.reply);
          setOnetimenotify(true);
          setTimeout(() => {
            navigate("/otp", {
              state: { 
                data: {
                   userId: response.data.data.user_id,
                  "field_type": "mobile",
                   country_code:DialCode,
                   mobile:mobile,
                   email:"",
                  },
             },
            });
          }, 1000);
        } else if (response.status ==   203) {
          setTimenotify(response.data.reply);
          setOnetimenotify(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //------//
  return (
    <>
    <ToastContainer/>
    <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Forgot Password</h2>
          </div>
        </div>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={5} className={`m-auto`}>
              <div className={`${cx.loginForm}`}>
                 <div className={`${cx.contentBody}`}>
                  <h3>Forgot Password</h3>
                     <Tab.Container defaultActiveKey="tabF1">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="tabF1">Email</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tabF2">Phone</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabF1">
                      <Form onSubmit={handleSubmit(forgotPassword)}>
                          <Row>
                            <Col lg={12}>
                          <div className={`${st.formBox}`}>
                          <label>Email</label>
                          <Form.Control
                           type="text" 
                           placeholder="Email*"
                          {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          })} 
                          />
                            {errors?.email?.type === "pattern" && (
                          <p style={{ color: "#fbbf15" }}>Invalid email addres</p>
                        )}
                        {errors?.email?.type === "required" && (
                          <p style={{ color: "#fbbf15" }}>This field is required</p>
                        )}
                        </div>
                            </Col>
                            <Col lg={12}>
                            <div className={`${st.formBox} mb-0`}>
                          <Button  type="submit" className={`btn ${st.submitBtn} ${st.fullWidth}`}>Submit</Button>
                        </div>
                            </Col>
                          </Row>
                        </Form>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabF2">
                      <Form>
                          <Row>
                            <Col lg={12}>
                              <div className={`${st.formBox}`}>
                                <label>Phone Number</label>
                                <div  className={`${st.formBox}`}>
                            <PhoneInput
                              country={"in"}
                              inputProps={{
                                name: "phone",
                                required: true,
                                autoFocus: true,
                              }}
                              onChange={phoneInput}
                              defaultErrorMessage="It doesn't works, why?"
                            />
                          </div>
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className={`${st.formBox} mb-0`}>
                              <Button onClick={MobileforgotPassword} className={`btn ${st.submitBtn} ${st.fullWidth}`}>Submit</Button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div className={`${cx.signupPoint}`}>
                    <p>Don't have an account? <NavLink to="/sign-up">Sign Up!</NavLink></p>
                  </div>
                 </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ForgotPassword;
