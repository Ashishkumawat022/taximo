import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cx from "../UserProfile.module.scss";
import lx from "./Profile.module.scss";
import st from "../../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button, Modal } from "react-bootstrap";
import { Usermenu } from "../../../../components/Website";
import { Banner1 } from "../../../../assets/images";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { useForm } from "react-hook-form";

const Profile = (props: any) => {
  //----validation----//
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm();
//----------//
  const navigate = useNavigate();
  const[modalOpen,setModalOpen]=useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [localdata, setlocaldata] = useState(localStorage.getItem("userData"));
  let localData: any = localdata;
  let profileData: any = JSON.parse(localData);
  //console.log(profileData, "profile");
  let id = profileData?._id;
  const [Name, setName] = useState(profileData?.full_name);
  const [email, setEmail] = useState(profileData?.email);
  const [mobile, setmobile] = useState(
    profileData?.country_code + profileData?.mobile?.toString());
  const [DialCode, setDialCode] = useState("");
  const [cuntrycode, setcuntrycode] = useState("");
  const [nubmerlength, setnumberlength] = useState(0);

 function phoneInput(value: any, data: any) {
      //console.log(value, data, "phoneInput");
      let number= data.dialCode.length
      setmobile(value);
      setDialCode(`+${data.dialCode}`);
      setcuntrycode(`${data.countryCode}`);
      setnumberlength(number)
    }
  //---------change email----//
  function ChangeEmail(postdata: any) {
    var data = JSON.stringify({
      email: postdata.email,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_WEBSITE}/change_email`,
      headers: {
        Authorization: JSON.parse(localStorage.getItem("userToken")!),
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
         console.log(response, "ChangeEmail");
         if (response.status == 200 ) {
           let allData:any = JSON.parse(localStorage.getItem("userData")!)
           allData.email = response.data.data.email
         localStorage.setItem( "userData", JSON.stringify(allData) || "{}");
        //setlocaldata(data);
        handleClose()
  }})
      .catch(function (error) {
        console.log(error);
      });
  }

  //-------------------------//
  //---------Request_otp--------//
 function Requestotp() {
  const mobileNumber = mobile.slice(nubmerlength)
  var data = JSON.stringify({
      country_code:DialCode,
      mobile: mobileNumber,
  });
console.log(mobileNumber,"mmmmmmmmmm")
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
        let allData:any = JSON.parse(localStorage.getItem("userData")!)
        allData.country_code = DialCode
        allData.mobile =mobileNumber
        localStorage.setItem( "userData", JSON.stringify(allData) || "{}");
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
        handleClose()
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
            <h2>Dashboard</h2>
          </div>
        </div>
      </section>
    <section className={`${cx.complete_profile}`}>
        <Container>
          <form className={`${cx.login_form}`}>
            <Row>
              <Col md={3}>
                <Usermenu />
              </Col>

              <Col md={9}>
                <div className={`${cx.contentBody}`}>
                  <Col md={12} className={`${cx.profileTitle}`}>
                    <h5>My Profile</h5>
                  </Col>

                  <div className={`${cx.contentInside}`}>
                    <Row>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Name</label>
                          <Form.Control type="text" defaultValue={Name} disabled/>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Email</label>
                          <div className="position-relative">
                          <Form.Control
                           type="email" 
                           value={email} 
                           disabled
                          />
                           <BiEdit className={`${lx.edit_icon}`} 
                            onClick={() => {
                                        handleShow();
                                        setModalOpen("email")
                                      }}
                                        />
                                      </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={`${st.formBox}`}>
                          <label>Phone Number</label>
                          <div className="position-relative">
                          <PhoneInput
                          inputProps={{
                            name: "",
                            required: true,
                            autoFocus: true,
                          }}
                          disabled
                          country={cuntrycode}
                          value={mobile}
                          onChange={phoneInput}
                          defaultErrorMessage="It doesn't works, why?"
                        />
                         <BiEdit  className={`${lx.edit_icon}`} 
                          onClick={() => {
                                        handleShow();
                                        setModalOpen("mobile")
                                      }} />
                        </div>
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
      {modalOpen == "email" ? ( 
      <Modal show={show} className={`${cx.modalPopup}`} onHide={()=>{handleClose()
        setEmail(profileData?.email)
      }}>
         <Form onSubmit={handleSubmit(ChangeEmail)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Email</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <Row>
                  <Col lg={12}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        defaultValue={profileData?.email} 
                        {...register("email", {
                          onChange: (e:any) => setEmail(e.target.value),
                          required: true,
                          pattern:
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        />
                         {errors?.email?.type === "pattern" && (
                            <span style={{ color: "#fbbf15" }}>Invalid email addres</span>
                          )}
                          {errors?.email?.type === "required" && (
                            <span style={{ color: "#fbbf15" }}>
                              This field is required
                            </span>
                          )}
                    </Form.Group>

                   
                  </Col>
                </Row>
        </Modal.Body>
       
        <Modal.Footer>
        <div className={`${st.formBox} mb-0 mt-3`}>
                          <Button type="submit" className={`btn ${st.submitBtn} ${st.fullWidth}`}>Submit</Button>
                        </div>
        </Modal.Footer>
        </Form>
      </Modal>
 ) : (
      <Modal show={show} className={`${cx.modalPopup}`} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Phone Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
                  <Col lg={12}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label>Phone Number</Form.Label>
                      <PhoneInput
                       //country={"in"}
                          inputProps={{
                            name: "",
                            required: true,
                            autoFocus: true,
                          }}
                          
                          country={cuntrycode}
                          value={mobile}
                          onChange={phoneInput}
                          defaultErrorMessage="It doesn't works, why?"
                        />
                    </Form.Group>

                   
                  </Col>
                </Row>
        </Modal.Body>
        <Modal.Footer>
        <div className={`${st.formBox} mb-0 mt-3`}>
                          <Button onClick={Requestotp} className={`btn ${st.submitBtn} ${st.fullWidth}`}>Submit</Button>
                        </div>
        </Modal.Footer>
      </Modal>
        )}
    </>
  );
};

export default Profile;
