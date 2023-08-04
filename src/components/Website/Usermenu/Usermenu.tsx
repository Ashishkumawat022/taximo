import React, { useState } from "react";
import cx from "./Usermenu.module.scss";

import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Usermenu = () => {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  let localData = JSON.parse(localStorage?.getItem("adminData")!);
  return (
    <>
    <ul className={`${cx.profileMenu} mb-2`}>
    
      <li>
        <NavLink to="/booking-ride">Book a Taxi</NavLink>
      </li>
      <li>
        <NavLink to="/user/coupons">Coupons</NavLink>
      </li>
        <li>
          <NavLink to="/user/payments">Payment</NavLink>
        </li>
        <li>
          <NavLink to="/user/rides">Rides</NavLink>
        </li>
    </ul>
      <ul className={`${cx.profileMenu} mb-2`}>
      <li>
        <NavLink to="/user/profile">My Profile</NavLink>
      </li>
        <li>
          <NavLink to="/user/change-password">Change Password</NavLink>
        </li>
        <li>
          <button type="button" onClick={handleShow} >Logout</button>
        </li>
      </ul>

      <Modal show={show} onHide={handleClose} size="sm" aria-labelledby="example-modal-sizes-title-sm" centered>
        <div className={`${cx.logoutPopup}`}>
            <h3>Are you Sure you want to logout?</h3>
              <button className={`btn ${cx.actionBtn}`}
             
               onClick={() => {
                localStorage.removeItem("userData");
                localStorage.removeItem("userToken");
                // localStorage.removeItem("dialcode");
                // localStorage.removeItem("countrycode");
                navigate("/login");
              }}
               >
                Logout
              </button>
              <NavLink className={`btn ${cx.cancelBtn}`} to="" onClick={handleClose}>
                Cancel
              </NavLink>
        </div>
      </Modal>
    </>
  );
};

export default Usermenu;
