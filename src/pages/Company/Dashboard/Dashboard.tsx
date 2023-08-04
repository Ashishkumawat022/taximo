import React, { Fragment, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "../../../assets/stylesheet/companyStyle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Dashboard.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { AddMoney } from "../../../components/Company/Modals";


export default function Dashboard() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Dashboard</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>

            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className={`${cx.contentBox} ${cx.countCardBox}`}>
                    <Row className="align-items-center">
                      <Col lg={8}>
                        <p>Wallet</p>
                        <h3>328</h3>
                      </Col>
                      <Col lg={4} className="text-end">
                        <button className={`btn ${cx.addMoney}`} onClick={handleShow}>
                          Add Money
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={3}>
                  <div className={`${cx.contentBox} ${cx.countCardBox}`}>
                    <p>Total Customer</p>
                    <h3>328</h3>
                  </div>
                </Col>
                <Col md={3}>
                  <div className={`${cx.contentBox} ${cx.countCardBox}`}>
                    <p>Total Coupons</p>
                    <h3>328</h3>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </section>

      <AddMoney show={show} handleClose={handleClose} /> 

    </>
  );
}
