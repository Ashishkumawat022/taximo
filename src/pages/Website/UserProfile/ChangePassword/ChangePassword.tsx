import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cx from "../UserProfile.module.scss";
import lx from "./ChangePassword.module.scss";
import st from "../../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Usermenu } from "../../../../components/Website";
import { Banner1 } from "../../../../assets/images";
import { AiFillEye, AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ChangePassword = (props: any) => {
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
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //----Change password--------//
  function changepassword(postdata: any) {
    if (postdata.password === postdata.confirmPassword) {
      var data = JSON.stringify({
        old_password: postdata.old_password,
        password: postdata.password,
      });
      var config = {
        method: "post",
        url: `${process.env.REACT_APP_API_WEBSITE}/change_password`,
        headers: {
          Authorization: JSON.parse(localStorage.getItem("userToken")!),
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          //console.log(response, "changepassword");
      
          if (response.status ==  200 || 203 ) {
            setTimenotify(response.data.reply);
            setOnetimenotify(true);
            reset()
          }
        })
        .catch(function (error) {
          console.log(error);
          setTimenotify(error.response.data.reply);
          setOnetimenotify(true);
        });
    } else {
      notify("New password and confirm password does not match");
    }
  }

  //-------------//------------//
  return (
    <>
    <ToastContainer/>
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
          <form 
          className={`${cx.login_form}`}
            onSubmit={handleSubmit(changepassword)}
          >
            <Row>
              <Col md={3}>
                <Usermenu />
              </Col>

              <Col md={9}>
                <div className={`${cx.contentBody}`}>
                  <Col md={12} className={`${cx.profileTitle}`}>
                    <h5>Change Password</h5>
                  </Col>

                  <div className={`${cx.contentInside}`}>
                    <Row>
                     
                      <Col md={12} >
                        <div className={`${st.formBox}`}>
                        <label>
                          Old Password<span className="text-danger">*</span> :
                        </label>
                       
                          <div className="position-relative">
                            <input
                              type={show ? "password" : "text"}
                              className="form-control"
                              id="pwd"
                              placeholder="Old password"
                              {...register("old_password", {
                                required: "This password is required",
                                minLength: {
                                  value: 6,
                                  message: "Please enter minimum 6 characters",
                                },
                              })}
                            />
                            <span className={`${st.psssword_icon}`}>
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
                            </span>
                          </div>
                          {errors?.old_password?.type === "minLength" && (
                            <p style={{ color: "#fbbf15" }}>
                              Please enter minimum 6 characters
                            </p>
                          )}
                          {errors?.old_password?.type === "required" && (
                            <p style={{ color: "#fbbf15" }}>
                              This field is required
                            </p>
                          )}
                        </div>
                      </Col>
                     
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
                              {...register("password", {
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

                      <Col lg={12} className={`${st.form_box}`}>
                      <div className={`${st.formBox} mb-0 mt-3`}>
                        <Button type="submit"className={`btn ${st.submitBtn} ${st.fullWidth}`}>
                        Update Password
                        </Button>
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

export default ChangePassword;
