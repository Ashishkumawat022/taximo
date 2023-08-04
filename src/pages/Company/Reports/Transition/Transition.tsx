import React, { Fragment, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "../../../../assets/stylesheet/companyStyle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Transition.module.scss";
import table from "../../../../assets/stylesheet/datatable.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";

import DataGrid from "./DataGrid";

export default function Transition() {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Transitions</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
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


    </>
  );
}
