import React, { useEffect, useState } from "react";
import cx from "./ResetPassword.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ResetPassword = (props: any) => {

//---react-toastify-----//
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
  const location: any = useLocation();
  let data = location?.state?.data;
  console.log(data, "user");
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
    //----validation----//
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
  //otp Api//--------
  const navigate = useNavigate();
  const [new_password, setNew_password] = useState("");
  function ResetOtp(postdata: any) {
    if (postdata.new_password === postdata.confirmPassword) {
      var Newdata = JSON.stringify({
        user_id:data.user_id,
         reset_token:data.reset_token,
         new_password:postdata.new_password
      });
      var config = {
        method: "post",
        url: `${process.env.REACT_APP_API_WEBSITE}/reset_password`,
        headers: {
          "Content-Type": "application/json",
        },
        data: Newdata,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ResetOtp");
          if  (response.status ==  200 ) {
            setTimeout(() => {
              navigate("/login", {
              });
            }, 500);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      notify("New password and confirm password does not match");
    }
  }
//-------------//---------//
  return (
    <>
    <ToastContainer/>
    <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Reset Password</h2>
          </div>
        </div>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={5} className={`m-auto`}>
              <div className={`${cx.loginForm}`}>
                 <div className={`${cx.contentBody}`}>
                  <h3>Reset Password</h3>
                  <Form  onSubmit={handleSubmit(ResetOtp)}>
                    <Row>
                         <Col md={12} >
                      <div className={`${st.formBox}`}>
                        <label className="form-label">
                          New Password<span className="text-danger">*</span> :
                        </label>
                        <div className="position-relative">
                         
                            <input
                              type={show2 ? "password" : "text"}
                              className="form-control"
                              id="pwd2"
                              placeholder="password"
                              {...register("new_password", {
                                required: "This password is required",
                                minLength: {
                                  value: 6,
                                  message: "Please enter minimum 6 characters",
                                },
                              })}
                            />
                            <span className={`${st.psssword_icon}`}>
                              {show2 ? (
                                <AiFillEyeInvisible
                                className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    setShow2(false);
                                  }}
                                />
                              ) : (
                                <AiFillEye
                                className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    setShow2(true);
                                  }}
                                />
                              )}
                            </span>
                        </div>
                        {errors?.new_password?.type === "minLength" && (
                            <p style={{ color: "#fbbf15" }}>
                              Please enter minimum 6 characters
                            </p>
                          )}
                          {errors?.new_password?.type === "required" && (
                            <p style={{ color: "#fbbf15" }}>
                              This field is required
                            </p>
                          )}
                        </div>
                      </Col>

                    
                      <Col md={12} >
                      <div className={`${st.formBox}`}>
                        <label>
                          Confirm Password<span className="text-danger">*</span>{" "}
                          :
                        </label>
                        <div className="position-relative">
                       
                            <input
                              type={show3 ? "password" : "text"}
                              className="form-control"
                              id="pwd2"
                              placeholder="Confirm password"
                              {...register("confirmPassword", {
                                required: "This Confirm password is required",
                                minLength: {
                                  value: 6,
                                  message: "Please enter minimum 6 characters",
                                },
                              })}
                            />
                            <span className={`${st.psssword_icon}`}>
                              {show3 ? (
                                <AiFillEyeInvisible
                                className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    setShow3(false);
                                  }}
                                />
                              ) : (
                                <AiFillEye
                                className={`${st.eyeIcon}`}
                                  onClick={() => {
                                    setShow3(true);
                                  }}
                                />
                              )}
                            </span>
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
                        <div className={`${st.formBox} mb-0`}>
                          <Button type="submit" className={`btn ${st.submitBtn} ${st.fullWidth}`}>Submit</Button>
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

export default ResetPassword;
