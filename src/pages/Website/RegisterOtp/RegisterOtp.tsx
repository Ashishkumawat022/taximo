import React, { useEffect, useState } from "react";
import cx from "./RegisterOtp.module.scss"
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Banner1 } from "../../../assets/images";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RegisterOtp = (props: any) => {
 const navigate = useNavigate();
 const [mobile, setmobile] = useState("");
 const [DialCode, setDialCode] = useState("");
 const [cuntrycode, setcuntrycode] = useState("");

 function phoneInput(value: any, data: any) {
  // console.log(value, data, "phoneInput");
   let number= data.dialCode.length
   setmobile(value.slice(number));
   setDialCode(`+${data.dialCode}`);
   setcuntrycode(`${data.countryCode}`);
 }
  //----validation----//
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
 //---------Request_otp--------//
 function Requestotp() {
    var data = JSON.stringify({
        country_code:DialCode,
        mobile:mobile,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_WEBSITE}/request_otp`,
      headers: {
        Authorization: JSON.parse(localStorage.getItem("userToken")!),
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
         console.log(response, "Requestotp");
         
         if (response.status == 200 ) {
          setTimeout(() => {
            navigate("/verify-otp", {
              state: { 
                data: {
                     DialCode:DialCode,
                    mobile:mobile
                  },
             },
            });
          }, 500);
         }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 //------------//---------------//
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
                  <Form>

                    <Row>
                        <Col lg={12}>
                        <div className={`${st.formBox}`}>
                          <label>Mobile Number</label>
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
                          <Button onClick={Requestotp} className={`btn ${st.submitBtn} ${st.fullWidth}`}>Submit</Button>
                        </div>
                      </Col>
                    </Row>

                  </Form>
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

export default RegisterOtp;
