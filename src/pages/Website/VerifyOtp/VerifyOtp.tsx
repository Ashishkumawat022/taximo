import React, { useEffect, useState } from "react";
import cx from "./VerifyOtp.module.scss"
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const VefiryOtp = (props: any) => {
     //---useLoctaion Data----//
  const location: any = useLocation();
  let data = location?.state?.data;
  console.log(data, "mydata");
    //----validation----//
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    //----//
 
  //otp Api//--------
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
 
  function OtpVefiry(postdata: any) {
    var newdata = JSON.stringify({
   "otp":postdata.otp,
   "country_code":data.DialCode,
   "mobile":data.mobile.slice(data.DialCode.length-1),
   "activity":"register",
    });
      var config = {
        method: "post",
        url: `${process.env.REACT_APP_API_WEBSITE}/verify_otp`,
        headers: {
            Authorization: JSON.parse(localStorage.getItem("userToken")!),
          "Content-Type": "application/json",
        },
        data: newdata,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "OtpVefiry");
          if (response.status == 200 ) {
            setTimeout(() => {
              navigate("/");
            }, 500);  
           }
        
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
//----------Resend Otp----//
function ResendOtp() {
  var requestdata = JSON.stringify({
      country_code:data.DialCode,
      mobile:data.mobile,
  });

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_WEBSITE}/request_otp`,
    headers: {
      Authorization: JSON.parse(localStorage.getItem("userToken")!),
      "Content-Type": "application/json",
    },
    data: requestdata,
  };
  axios(config)
    .then(function (response) {
       console.log(response, "ResendOtp");
       
    })
    .catch(function (error) {
      console.log(error);
    });
}
//-------------//---------//
  return (
    <>
   
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

export default VefiryOtp;
