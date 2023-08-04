import React, { useEffect, useState } from "react";
import cx from './CompanyHeader.module.scss';
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMoreHorizontal } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../../store/global-context";


import { Col, Row, InputGroup, FormControl, Dropdown } from "react-bootstrap"
import { profile } from "../../../assets/images";

const CompanyHeader = (props: any) => {
    const globalCtx = useContext(GlobalContext);
    let hideonScroll = globalCtx.showMenu;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // ----------------------- Active on Scroll Functionality -------------------------------- //
    const [onscrollActive, setOnscrollActive] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            const scrollCheck: boolean = window.scrollY > 10;
            setOnscrollActive(scrollCheck);
        };

        // setting the event handler from web API
        document.addEventListener("scroll", onScroll);

        // cleaning up from the web API
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [])
    // show ? disableBodyScroll(document.body) : enableBodyScroll(document.body);

    return (<>
        <header className={`${cx.mainHeader}`}>
            <Row className={`${cx.mobileHeader}`}>
                <Col className="col-3">
                    <GiHamburgerMenu className={`${cx.hembugmenu}`} onClick={() => { handleShow(); globalCtx.displayMenu(hideonScroll) }} />
                </Col>
                <Col className="col-6 text-center">

                </Col>
                <Col md={4} lg={6} xl={7} className={`col-3 ${cx.headerRight}`}>
                    <ul>
                        <li className={`${cx.profileBox}`}>
                            <Dropdown>
                                <Dropdown.Toggle variant="a" id="dropdown-basic">
                                    <div className={`${cx.menuTT}`}>
                                        <img src={profile} className={`${cx.profileImg}`} alt="logo" />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className={`${cx.borderM}`} href="#">
                                        <p>Admin</p>
                                        <h5>admin@gmail.com</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item className={`${cx.pSpace}`} href="#">
                                        <NavLink to="edit-profile"><h5>Edit Profile</h5></NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item className={`${cx.pSpace}`} href="#">
                                        <NavLink to="/admin"><h5>Logout</h5></NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row className={`align-items-center ${cx.headerRow}`}>
                <Col md={12} lg={12} xl={12} className={`col-12 ${cx.headerMobile} ${globalCtx.showMore ? cx.show : ''}`}>
                    <Row className="align-items-center">
                        <Col md={7} lg={7} xl={7} className={`col-9 ${cx.headerSearch}`}>
                        </Col>
                        <Col md={5} lg={5} xl={5} className={`col-3 ${cx.headerRight}`}>
                            <ul>
                                <li className={`${cx.profileBox}`}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="a" id="dropdown-basic">
                                            <div className={`${cx.menuTT}`}>
                                                <img src={profile} className={`${cx.profileImg}`} alt="logo" />
                                            </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item className={`${cx.borderM}`} href="#">
                                                <p>Admin</p>
                                                <h5>admin@gmail.com</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item className={`${cx.pSpace}`} href="#">
                                                <NavLink to="edit-profile"><h5>Edit Profile</h5></NavLink>
                                            </Dropdown.Item>
                                            <Dropdown.Item className={`${cx.pSpace}`} href="#">
                                                <NavLink to="/login"><h5>Logout</h5></NavLink>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>

    </>)
}

export default CompanyHeader;