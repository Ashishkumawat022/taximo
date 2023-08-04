import React, { useEffect, useState } from "react";
import cx from "./Otp.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Otp = (props: any) => {
  const location: any = useLocation();
  let data = location?.state?.data;
  console.log(data, "userid");
    //----validation----//
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    //----//
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
  //otp Api//--------
  const navigate = useNavigate();
  function OtpVefiry(postdata: any) {
    var dataotp = JSON.stringify({
  "otp":postdata.otp,
  "user_id": data.userId,
    });
      var config = {
        method: "post",
        url: `${process.env.REACT_APP_API_WEBSITE}/forgot_password_otp`,
        headers: {
          "Content-Type": "application/json",
        },
        data: dataotp,
      };
      axios(config)
        .then(function (response) {
          //console.log(response, "OtpVefiry");
          if (response.status ==  200 ) {
            setTimenotify(response.data.reply);
            setOnetimenotify(true);
            setTimeout(() => {
              navigate("/reset_password", {
                state: { data: response.data.data },
              });
            }, 500);
          } else if (response.status ==   203) {
            setTimenotify(response.data.reply);
            setOnetimenotify(true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
//----------Resend Otp----//
function ResendOtp() {
  let postdata={}
  if(data.field_type=="email"){
    postdata={
      "field_type": "email",
       email:data.email , 
    }
  }else{
    postdata={
      "field_type": "mobile",
       country_code:data.country_code,
       mobile:data.mobile,
      
    }
  }
  var ResendData = JSON.stringify(postdata);

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_WEBSITE}/forgot_password`,
    headers: {
      "Content-Type": "application/json",
    },
    data: ResendData,
  };
  axios(config)
    .then(function (response) {
       console.log(response, "MobileforgotPassword");
    })
    .catch(function (error) {
      console.log(error);
    });
}


//-------------//---------//
  return (
    <>
    <ToastContainer/>
    <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bannersection}`}>
          <img src={Banner1} />
          <div className={`${cx.bannerContent}`}>
            <h2>Otp Verification</h2>
          </div>
        </div>
      </section>

      <section className={`${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={5} className={`m-auto`}>
              <div className={`${cx.loginForm}`}>
                 <div className={`${cx.contentBody}`}>
                  <h3>Verify Otp</h3>
                  <Form  onSubmit={handleSubmit(OtpVefiry)}>
                    <Row>
                      <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <label>Otp has been sent your registred phone number XXXXXXXX98</label>
                          <Form.Control 
                           type="text" 
                           placeholder="Otp*"
                          {...register("otp", {
                            required: "This password is required",
                          })} 
                          />
                           {errors?.otp?.type === "required" && (
                            <p style={{ color: "#fcc014" }}>
                              This field is required
                            </p>
                          )}
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className={`${st.formBox} mb-0`}>
                          <Button type="submit" className={`btn ${st.submitBtn} ${st.fullWidth}`}>Vefiry</Button>
                        </div>
                      </Col>
                    </Row>

                  </Form>
                  <div className={`${cx.signupPoint}`}>
                    <p><Button className={`${cx.resendBtnBottom}`} onClick={ResendOtp} >Resend Otp</Button></p>
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

export default Otp;
