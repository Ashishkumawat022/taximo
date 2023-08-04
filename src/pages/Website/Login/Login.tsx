import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cx from "./Login.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import {  Banner1 } from "../../../assets/images";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props: any) => {
const navigate = useNavigate();
const [show, setShow] = useState(true);
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
      'os': 'windows', 
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(response, "signin");
      
      if (response.status == 200) {
        localStorage.setItem( "userData", JSON.stringify(response.data.data) || "{}");
        localStorage.setItem("userToken",JSON.stringify(response.data.data.login_token));
        setTimenotify(response.data.reply);
        setOnetimenotify(true);
        if(response.data.data.profile_status == "registered"){
          setTimeout(() => {
            navigate("/register-otp");
          }, 2000);
        }else if(response.data.data.profile_status == "complete"){
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
         
        
      } else {
          setTimenotify(response.data.reply)
          setOnetimenotify(true);
      }
    })
    .catch(function (error) {
      if (error.response.status == 400 || 404 || 500) {
        setTimenotify(error.response.data.reply);
        setOnetimenotify(true);
      }
      else {
        notify("User not Registered");
      }
     
    });
}

//----------//---------//
  return (
    <>
    <ToastContainer/>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Login</h2>
          </div>
        </div>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={5} className={`m-auto`}>
              <div className={`${cx.loginForm}`}>
                 <div className={`${cx.contentBody}`}>
                  <h3>Login to Your Account</h3>
                  <Form onSubmit={handleSubmit(signin)}>
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
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                          />
                        </div>
                        {errors?.email?.type === "pattern" && (
                            <span style={{ color: "#fbbf15" }}>Invalid email addres</span>
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
                          <span style={{ color: "#fbbf15" }}>This field is required</span>
                        )}
                          <div className={`${cx.forgotPassword}`}>
                            <NavLink to="/forgot-password">
                              Forgot Password?
                            </NavLink>
                          </div>
                         
                        </div>
                       
                      </Col>
                      <Col lg={12}>
                        <div className={`${st.formBox} mb-0`}>
                        <Button type="submit"  className={`btn ${st.submitBtn} ${st.fullWidth}`}>
                        Login
                        </Button>
                        </div>
                      </Col>
                    </Row>

                  </Form>
                  <div className={`${cx.signupPoint}`}>
                    <p className="mb-3">Don't have an account? <NavLink to="/sign-up">Sign Up</NavLink></p>
                    <p>Register your company account <NavLink to="/become-company">Sign Up</NavLink></p>
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

export default Login;
