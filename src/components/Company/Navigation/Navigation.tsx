import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { headerClass } from "../../../constants/ui";
import CompanyFooter from "../Footer/CompanyFooter";
import CompanyHeader from "../Header/CompanyHeader";
import CompanySidebar from "../Sidebar/CompanySidebar";
import cx from "./Navigation.module.scss";

export default function CompanyNavigation() {
    let location = useLocation();
    console.log(window.location.href, location, "useNavigate")
    return <div className={`${cx.wrapper}`}>
        <CompanyHeader />
        <CompanySidebar />
        <Outlet />
        <CompanyFooter />
    </div>
}
