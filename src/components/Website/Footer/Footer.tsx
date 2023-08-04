import React from "react";
import cx from './Footer.module.scss';
import { Container,Row,Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../assets/images";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className={`${cx.mainFooter}`}>
        <Container>
           <Row>
            <Col lg={3} className={`${cx.ftMenu} ${cx.ftAbout}`}>
                <NavLink to="#" className={cx.logo}>
                  <img src={Logo} />
                </NavLink>
                <p className="m-0">Taximo aims to connect local taxi's of Canada with the passengers without any waiting. Now Taxi is just one button away.</p>
            </Col>
            <Col lg={3} className={`${cx.ftMenu} ${cx.ftQcLinks}`}>
                <h5>Quick Links</h5>
                <ul>  
                  <li><NavLink to="#">Contact Us</NavLink></li>   
                  <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>   
                  <li><NavLink to="/terms-and-conditions">Terms & Conditions</NavLink></li>  
                </ul>  
            </Col>
            <Col lg={3} className={`${cx.ftMenu} ${cx.ftBusinessMenu}`}>
                <h5>Business Signup</h5>
                <ul>  
                  <li><NavLink to="/become-driver">Become a Driver</NavLink></li>   
                  <li><NavLink to="/become-company">Become a Company</NavLink></li>  
                </ul>  
            </Col>
            <Col lg={3} className={`${cx.ftMenu} ${cx.ftSocial}`}>
                <h5>Social Links</h5>
                <ul className={cx.socialLinks}>  
                  <li><NavLink to="#" title="Facebook"><FaFacebookF /></NavLink></li> 
                  <li><NavLink to="#" title="Twitter"><FaTwitter /></NavLink></li> 
                  <li><NavLink to="#" title="Linkedin"><FaLinkedinIn /></NavLink></li> 
                  <li><NavLink to="#" title="Instagram"><FaInstagram /></NavLink></li>     
                </ul>  
            </Col>
           </Row>
        </Container>
        
        <div className={`${cx.copyRight}`}>
        Copyright 2023 All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
