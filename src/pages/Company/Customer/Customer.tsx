import React, { Fragment, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "../../../assets/stylesheet/companyStyle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Customer.module.scss";
import table from "../../../assets/stylesheet/datatable.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";

import DataGrid from "./DataGrid";
import { AddCustomer } from "../../../components/Company/Modals";

export default function Customer() {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Customers</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button className={`btn ${st.themeBtn}`} onClick={handleShow}>
                Add New User
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${table.dataTable}`}>
                <DataGrid />
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      <AddCustomer show={show} handleClose={handleClose} /> 

    </>
  );
}
