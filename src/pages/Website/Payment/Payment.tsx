import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Payment.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row } from "react-bootstrap";

import { SelectTaxi } from "../../../components/Website";
import { AddCoupon, PayPayment } from "../../../components/Website/Modals";


const Payment = (props: any) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [paymentshow, setpaymentShow] = useState(false);
  const handlepaymentClose = () => setpaymentShow(false);
  const handlepaymentShow = () => setpaymentShow(true);

  
  return (
    <>
      <div className={`${st.headerFix}`}></div>
      <section className={`${cx.paymentSection} ${st.sectionPadding}`}>
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className={`${cx.paymentSidebar}`}>
                <SelectTaxi />
                 <ul className={`${cx.paymentUl}`}>
                    <li>
                      <span>Date</span>
                      <span>22-02-2022</span>
                    </li>
                    <li>
                      <span>Time</span>
                      <span>12:30 PM</span>
                    </li>
                    <li>
                      <span>Payment</span>
                      <span>$ 25.00</span>
                    </li>
                    {/* <li>
                      <span>Coupon <button className={`btn ${cx.applyBtn}`} onClick={handleShow}>Apply Coupon</button></span>
                      <span className="text-danger">- $ 2.5</span>
                    </li> */}
                    <li className={`${cx.totalPayment}`}>
                      <span>Total Pay</span>
                      <span>$ 23.00</span>
                    </li>
                 </ul>

                 <button className={`btn ${cx.paymentBtn}`} onClick={handlepaymentShow}>Payment</button>
              </div>
            </Col> 
          </Row>
        </Container>
      </section>
      <AddCoupon show={show} handleClose={handleClose} /> 

      <PayPayment paymentshow={paymentshow} handlepaymentClose={handlepaymentClose} /> 
    </>
  );
};

export default Payment;
