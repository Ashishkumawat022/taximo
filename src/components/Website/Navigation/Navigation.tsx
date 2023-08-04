import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { headerClass } from "../../../constants/ui";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import cx from "./Navigation.module.scss";

export default function Navigation() {
    let location = useLocation();
    console.log(window.location.href, location, "useNavigate")
    return <div>
        {headerClass.every(route=>route === location?.pathname) ? <Header showHeaderClass="headerFix"/>:<Header showHeaderClass=""/>}
            
            <Outlet />
            {headerClass.every(route=>route === location?.pathname) ? <Fragment />:<Footer/>}
        </div>
}
