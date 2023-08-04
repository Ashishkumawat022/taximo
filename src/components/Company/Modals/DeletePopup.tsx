import React from "react";
import m from "./Modal.module.scss";
import { NavLink } from "react-router-dom";
import {
  Modal, Button
} from "react-bootstrap";
import { MdClose, } from "react-icons/md";

const DeletePopup = (props: any) => {
  let { show, handleClose } = props;
  const coupons = [1,2,3,4,5,6,7];
  return (
    <>
    <Modal
        centered scrollable show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
        <div className={`${m.logoutPopup}`}>
            <h3>Are you Sure you want to Delete this item?</h3>
            <div className={`${m.btnsAlignments}`}>
              <button type="button" className={`btn ${m.actionBtn}`} onClick={handleClose}>
                Delete
              </button>
              <NavLink className={`btn ${m.cancelBtn}`} to="" onClick={handleClose}>
                Cancel
              </NavLink>
              </div>
        </div>
      </Modal>
    </>
  );
};

export default DeletePopup;
