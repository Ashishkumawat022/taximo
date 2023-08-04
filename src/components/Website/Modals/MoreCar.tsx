import React from "react";
import m from "./Modal.module.scss";
import { NavLink } from "react-router-dom";
import {
  Modal,Button
} from "react-bootstrap";
import { MdClose, } from "react-icons/md";
import { SelectTaxi } from "..";

const MoreCar = (props: any) => {
  let { show, handleClose } = props;
  const cars = [1,2,3,4,5,6,7];
  return (
    <>
      <Modal
        centered scrollable
        show={show}
        onHide={handleClose}
        className={`${m.modalCts}`}
      >
      <Modal.Header>
        <Modal.Title>Select Car</Modal.Title>
        <button
          className={`${m.closeIcon}`}
          title="Close"
          onClick={handleClose}
        >
          <MdClose />
        </button>
      </Modal.Header>
        <Modal.Body>
          {cars.map((count:number)=><SelectTaxi key={count}/>)}
        </Modal.Body>
      
        <Modal.Footer>
          <Button className={`${m.submit}`}
           onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MoreCar;
