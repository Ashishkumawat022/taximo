import React from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/companyStyle.module.scss";
import { NavLink } from "react-router-dom";
import {
  Modal, Button, Row, Col, Form
} from "react-bootstrap";
import { MdClose, } from "react-icons/md";
import MultiSelect from "../MultiSelect/MultiSelect";

const AssignCoupon = (props: any) => {
  console.log(props,"props")
  let { assignshow, handleassignClose } = props;
  return (
    <>
      <Modal
        centered scrollable
        show={assignshow}
        onHide={handleassignClose}
        className={`${m.modalCts}`}
      >
        <Modal.Header>
          <Modal.Title>Assign Coupon</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleassignClose}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <div className={`${st.formBox}`}>
                <label>Assign Customer</label>
                <MultiSelect />
              </div>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button className={`${m.submit}`}
            onClick={handleassignClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AssignCoupon;
