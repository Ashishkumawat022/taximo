import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import cx from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useScrollHandler } from '../../../hooks/use-scroll'
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner1, Logo } from "../../../assets/images";

interface headerMain {
  showHeaderClass?:string
}
export default function Header(props:headerMain) {
let {showHeaderClass} = props
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  let localData = JSON.parse(localStorage.getItem("userToken")!);
  return (
    <>
      <header className={`${cx.main_header}  ${scroll ? cx.affix:""} ${showHeaderClass}`} >
        <Navbar className={`navbar navbar-expand-lg ${cx.ak_menu}`}>
          <div className={`${cx.mobile_topbar}`}></div>
          <Container>

            <NavLink className="navbar-brand" to="/">
              <img src={Logo} />
            </NavLink>

            <button className={`navbar-toggler ${cx.mobile_menu}`} onClick={handleShow}>
              <FiMenu />
            </button>
            <Navbar.Collapse id="basic-navbar-nav"
              className={` ${show && cx.slide_effect}`}
            >
              <div className={`${cx.menu_box}`}>
                <div className={`${cx.mobile_logo}`}>
                  <a
                    href="javascript:void(0);"
                    className={`${cx.mobile_close}`} onClick={handleClose}
                  >
                    ×
                  </a>
                </div>
                <Nav className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/booking-ride">Book a Taxi</NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink to="/login" className="btn">
                      Login
                    </NavLink>
                  </li> */}
                  { localData ?(
                      <li className="nav-item">
                    <NavLink to="/user/profile" className="btn">
                      My Profile
                    </NavLink>
                  </li>
                  ) :(
                    <li className="nav-item">
                    <NavLink to="/login" className="btn">
                      Login
                    </NavLink>
                  </li>
                  )
                  }
                  {/* <li className="nav-item">
                    <NavLink to="/user/profile" className="btn">
                      My Profile
                    </NavLink>
                  </li> */}
                  
                </Nav>
              </div>

              <div className={`${cx.hide_box} ${cx.mobile_close}`} onClick={handleClose}></div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
