import React, { Fragment, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/companyStyle.module.scss";
import { NavLink } from "react-router-dom";
import {
  Modal, Button, Row, Tab, Nav, Col, Form
} from "react-bootstrap";
import { MdClose, } from "react-icons/md";
import AddedCard from "../AddedCard/AddedCard";

const AddMoney = (props: any) => {
  let { show, handleClose } = props;
  const [verifyOTP, setverifyOTP] = useState(true)
  const addedcard = [1, 2];
  function verifyOtp() {
    setverifyOTP(false)
  }
  return (
    <>
      <Modal
        centered scrollable
        show={show}
        onHide={()=>{handleClose();setverifyOTP(true)}}
        className={`${m.modalCts} ${m.paymentTab}`}
      >
        <Modal.Header>
          <Modal.Title>Add Money</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={()=>{handleClose();setverifyOTP(true)}}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          {verifyOTP ? <Fragment> 
          <input type="number" className={`form-control ${m.searchForm} ${st.removeArrow}`} placeholder="Amount" />
            <Tab.Container defaultActiveKey="paymentTab1">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="paymentTab1">Added Card</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="paymentTab2">Add New Card</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="paymentTab1">

                  {addedcard.map((count: number) => <AddedCard radioButton={true} key={count} />)}

                  <Col lg={12}>
                    <div className={`${st.formBox} text-center mb-0 mt-2`}>
                      <button className={`btn ${st.submitBtn}`} onClick={verifyOtp}>Submit</button>
                    </div>
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="paymentTab2">
                  <Row>
                    <Col lg={12}>
                      <div className={`${st.formBox}`}>
                        <label>Card Number</label>
                        <Form.Control type="text" placeholder="" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className={`${st.formBox}`}>
                        <label>Card Holder's Name</label>
                        <Form.Control type="text" placeholder="" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={`${st.formBox}`}>
                        <label>Expiry</label>
                        <Form.Control type="month" placeholder="" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={`${st.formBox}`}>
                        <label>CVV</label>
                        <Form.Control type="number" placeholder="" className={`${st.removeArrow}`} />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className={`${st.formBox} text-center mb-0 mt-2`}>
                        <button className={`btn ${st.submitBtn}`} onClick={verifyOtp}>Submit</button>
                      </div>
                    </Col>

                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container></Fragment> : <Fragment> <h6 className="mb-3">OTP has been sent your registred phone number XXXXXXXX98</h6>
            <Col lg={12}>
              <div className={`${st.formBox}`}>
                <Form.Control type="number" placeholder="OTP" className={`${st.removeArrow}`} />
              </div>
            </Col>
            <Col lg={12}>
              <div className={`${st.formBox} text-center mb-0 mt-2`}>
                <NavLink to="" className={`btn ${st.submitBtn}`}>Submit</NavLink>
              </div>
            </Col></Fragment>}
        </Modal.Body>

      </Modal>
    </>
  );
};

export default AddMoney;
