import React, { Fragment, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "../../../assets/stylesheet/companyStyle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Coupon.module.scss";
import table from "../../../assets/stylesheet/datatable.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown, Nav, Tab } from "react-bootstrap";

import DataGrid from "./DataGrid";
import DataGrid2 from "./DataGrid2";
import {AddCoupon, AssignCoupon } from "../../../components/Company/Modals";

export default function Coupon() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [assignshow, setassignShow] = useState(false);
  const handleassignClose = () => setassignShow(false);
  const handleassignShow = () => setassignShow(true);
 
  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Coupons</h5>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside} ${cx.couponTabs}`}>
          <Card>
            <Card.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Coupon List</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Assign Coupons</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <button className={`btn ${cx.themeBtn}`} onClick={handleShow}>
                          Add New Coupon
                        </button>
                        <div className={`${table.dataTable}`}>
                          <DataGrid />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <button className={`btn ${cx.themeBtn}`} onClick={()=>{
                          handleassignShow()
                        }}>
                          Assign Coupon
                        </button>
                        <div className={`${table.dataTable}`}>
                          <DataGrid2 />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
              </Tab.Container>

              
            </Card.Body>
          </Card>
        </div>
      </section>

      <AddCoupon show={show} handleClose={handleClose} /> 

      <AssignCoupon assignshow={assignshow} handleassignClose={handleassignClose} /> 

    </>
  );
}
