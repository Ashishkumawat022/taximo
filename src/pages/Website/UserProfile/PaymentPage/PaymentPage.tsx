import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "../UserProfile.module.scss";
import lx from "./Payment.module.scss";
import st from "../../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import { AddedCard, Usermenu } from "../../../../components/Website";
import { Banner1 } from "../../../../assets/images";
import { AddNewCard } from "../../../../components/Website/Modals";


const PaymentPage = (props: any) => {
  
  const [paymentshow, setpaymentShow] = useState(false);
  const handlepaymentClose = () => setpaymentShow(false);
  const handlepaymentShow = () => setpaymentShow(true);

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
                    <h5>Payment</h5>
                    <button type="button" className={`btn ${cx.addNew}`} onClick={handlepaymentShow} >Add New Card</button>
                  </Col>

                  <div className={`${cx.contentInside}`}>
                    <Row>
                      <Col lg={6}>
                        <AddedCard deleteIcon={true} />
                      </Col>
                      <Col lg={6}>
                        <AddedCard deleteIcon={true} />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </section>

      
      <AddNewCard paymentshow={paymentshow} handlepaymentClose={handlepaymentClose} /> 
    </>
  );
};

export default PaymentPage;
