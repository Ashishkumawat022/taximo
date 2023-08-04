import React from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/companyStyle.module.scss";
import { NavLink } from "react-router-dom";
import {
  Modal, Button, Row, Col, Form
} from "react-bootstrap";
import { MdClose, } from "react-icons/md";
import { Phonenumber } from "..";

const AddEmployee = (props: any) => {
  let { show, handleClose } = props;
  return (
    <>
      <Modal
        centered scrollable
        show={show}
        onHide={handleClose}
        className={`${m.modalCts}`}
      >
        <Modal.Header>
          <Modal.Title>Add Employee</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClose}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <div className={`${st.formBox}`}>
                <label>Employee Name </label>
                <Form.Control type="text" placeholder="" />
              </div>
            </Col>
            <Col lg={12}>
              <div className={`${st.formBox}`}>
                <label>Employee Email</label>
                <Form.Control type="email" placeholder="" />
              </div>
            </Col>
            <Col lg={12}>
              <div className={`${st.formBox}`}>
                <label>Employee Designation</label>
                <Form.Select aria-label="Default select example">
                  <option>--- Select ---</option>
                  <option value="1">Manager</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button className={`${m.submit}`}
            onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export default AddEmployee;
