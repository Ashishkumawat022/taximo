import React from "react";
import m from "./Modal.module.scss";
import { NavLink } from "react-router-dom";
import {
  Modal, Button
} from "react-bootstrap";
import { MdClose, } from "react-icons/md";
import Coupons from "../Coupons/Coupons";

const AddCoupon = (props: any) => {
  let { show, handleClose } = props;
  const coupons = [1,2,3,4,5,6,7];
  return (
    <>
      <Modal
        centered scrollable
        show={show}
        onHide={handleClose}
        className={`${m.modalCts}`}
      >
        <Modal.Header>
          <Modal.Title>Select Coupon Code</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClose}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className={`form-control ${m.searchForm}`} placeholder="Search..." />
          {coupons.map((count:number)=><Coupons key={count}/>)}
        </Modal.Body>

        <Modal.Footer>
          <Button className={`${m.submit}`}
            onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddCoupon;
