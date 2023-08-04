import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cx from "./Signup.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Checkbox } from "../../../components/Website/Forms";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Signup = (props: any) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [show2, set2Show] = useState(true);
  const [tick, setTick] = useState(true);
 //---//

 const [mobile, setmobile] = useState("");
 const [DialCode, setDialCode] = useState("");
 const [cuntrycode, setcuntrycode] = useState("");

 function phoneInput(value: any, data: any) {
   //console.log(value, data, "phoneInput");
   setmobile(value);
   setDialCode(`+${data.dialCode}`);
   setcuntrycode(`${data.countryCode}`);
 }
 //--//
 const [errtick, setErrtick] = useState("");
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
 //------------signup-----------//
 const [firstName, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
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

 function signup(postdata: any) {
   if (tick == true) {
     setErrtick("Please Select CheckBox");
   } else if (postdata.password === postdata.confirmPassword) {
     setErrtick("");

     let data = JSON.stringify({
      first_name: postdata.first_name,
      last_name: postdata.last_name ,
       email: postdata.email,
      "source": "email",
       password: postdata.password,
     });

     var config = {
       method: "post",
       url: `${process.env.REACT_APP_API_WEBSITE}/register`,
       headers: {
         'os': 'windows',
         "Content-Type": "application/json",
       },
       data: data,
     };
     axios(config)
       .then(function (response) {
         console.log(response, "signup");

         if (response.status == 200 ) {
          //localStorage.setItem( "userData", JSON.stringify(response.data.data) || "{}");
          localStorage.setItem("userToken",JSON.stringify(response.data.data.login_token));
           setTimenotify(response.data.reply);
           setOnetimenotify(true);
           reset()
           setTimeout(() => {
             navigate("/register-otp");
           }, 5000);
          }
        else if (response.status ==   203) {
          setTimenotify(response.data.reply);
          setOnetimenotify(true);
          setTick(false);
        }
       })
       .catch(function (error) {
         //console.log(error);
         if (error.response.status == 400 || 404 || 500) {
           setTimenotify(error.response.data.reply);
           setOnetimenotify(true);
         }
       });
   } else {
      
    setTimenotify("New password and confirm password does not match");
    setOnetimenotify(true);
   }
 }

 //---------------//------------//

  return (
    <>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Sign up</h2>
          </div>
        </div>
      </section>
<ToastContainer/>
      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={5} className={`m-auto`}>
              <div className={`${cx.loginForm}`}>
                 <div className={`${cx.contentBody}`}>
                  <h3>Create New Account</h3>
                  <Form onSubmit={handleSubmit(signup)}>
                    <Row>
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <label>First Name</label>
                          <div> 
                            <input
                              className="form-control"
                              type="text"
                              placeholder="First Name*"
                              {...register("first_name", {
                                required: true,
                                pattern: /^[a-zA-Z ]+$/,
                                min: 1,
                              })}
                            />
                            </div>
                            {errors?.first_name?.type === "required" && (
                              <span style={{ color: "#fbbf15" }}>
                                This field is required
                              </span>
                            )}

                            {errors?.first_name?.type === "pattern" && (
                              <span style={{ color: "#fbbf15" }}>
                                {" "}
                                Please check Pattern
                              </span>
                            )}
                            {errors?.first_name?.type === "min" && (
                              <span style={{ color: "#fbbf15" }}>
                                {" "}
                                minimum one character is necessary .
                              </span>
                            )}
                        </div>
                      </Col>
                       <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <label>Last Name</label>
                          <div> 
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Last Name*"
                              {...register("last_name", {
                                required: true,
                                pattern: /^[a-zA-Z ]+$/,
                                min: 1,
                              })}
                            />
                            </div>
                            {errors?.last_name?.type === "required" && (
                              <span style={{ color: "#fbbf15" }}>
                                This field is required
                              </span>
                            )}

                            {errors?.last_name?.type === "pattern" && (
                              <span style={{ color: "#fbbf15" }}>
                                {" "}
                                Please check Pattern
                              </span>
                            )}
                            {errors?.last_name?.type === "min" && (
                              <span style={{ color: "#fbbf15" }}>
                                {" "}
                                minimum one character is necessary .
                              </span>
                            )}
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <label>Email</label>
                          <div>
                            <input
                              className="form-control mb-3"
                              type="text"
                              placeholder="E-mail*"
                              {...register("email", {
                                required: true,
                                pattern:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                                className="form-control"
                                type={show ? "password" : "text"}
                                placeholder="Password*"
                                {...register("password", {
                                  required: "This password is required",
                                  minLength: {
                                    value: 6,
                                    message:
                                      "Please enter minimum 6 characters",
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
                              <p style={{ color: "#fbbf15" }}>
                                Please enter minimum 6 characters
                              </p>
                            )}
                            {errors?.password?.type === "required" && (
                              <p style={{ color: "#fbbf15" }}>
                                This field is required
                              </p>
                            )}
                        </div>
                        
                      </Col>
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <label>Confirm Password</label>
                          <div className="position-relative">
                              <input
                                className="form-control mb-3"
                                type={show2 ? "password" : "text"}
                                placeholder="Confirm Password*"
                              
                                {...register("confirmPassword", {
                                  required: "This Confirm password is required",
                                  minLength: {
                                    value: 6,
                                    message:
                                      "Please enter minimum 6 characters",
                                  },
                                })}
                              />
                              {show2 ? (
                                <AiFillEyeInvisible
                                className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    set2Show(false);
                                  }}
                                />
                              ) : (
                                <AiFillEye
                                className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    set2Show(true);
                                  }}
                                />
                              )}
                            </div>
                            {errors?.confirmPassword?.type === "minLength" && (
                              <p style={{ color: "#fbbf15" }}>
                                Please enter minimum 6 characters
                              </p>
                            )}
                            {errors?.confirmPassword?.type === "required" && (
                              <p style={{ color: "#fbbf15" }}>
                                This field is required
                              </p>
                            )}
                        </div>
                      </Col>
                      
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                        
                           <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="form1Example3"
                              onChange={() => {
                               
                                setTick((prevValue) => !prevValue);
                                setErrtick("");
                              }}
                            />
                            <label className="form-check-label">
                            
                              You are agree our <NavLink target="_blank" to="/terms-and-conditions">Terms & Conditions</NavLink>
                            </label>
                          </div>
                          <p style={{ color: "#fbbf15" }}> {errtick}</p>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className={`${st.formBox} mb-0`}>
                        <Button type="submit"  className={`btn ${st.submitBtn} ${st.fullWidth}`}>
                        Submit
                        </Button>
                        </div>
                      </Col>
                    </Row>

                  </Form>
                  <div className={`${cx.signupPoint}`}>
                    <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
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

export default Signup;
