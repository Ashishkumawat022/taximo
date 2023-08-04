import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import cx from './CompanySidebar.module.scss';
import { useContext, useState } from "react";
import GlobalContext from "../../../store/global-context";
import { Accordion, Button } from "react-bootstrap"


import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { Logo } from "../../../assets/images";
import { FaRegListAlt, FaTicketAlt } from "react-icons/fa";


const CompanySidebar = (props: any) => {
  const param = useLocation();
  console.log(param, "param")
  const globalCtx = useContext(GlobalContext);
  const [reportsList, setReportsList] = useState(param.pathname.includes('reports'));
  const [inventoryList, setInventoryList] = useState(param.pathname.includes('inventory'));
  const [menuList, setMenuList] = useState(param.pathname.includes('menu'));
  const [manageList, setManageList] = useState(param.pathname.includes('manage'));


  return (
    <>
      <aside className={`${cx.sidebarBody} ${globalCtx.showMenu ? cx.show : ''}`}>
        <div className={`${cx.hideBg}`} onClick={() => { globalCtx.displayMenu(globalCtx.showMenu) }}></div>
        <div className={`${cx.sidebarMain}`}>
          <div className={`${cx.logoBox}`}>
            <NavLink className={`${cx.navlogo}`} to="/">
              <img src={Logo} className={`${cx.logoIcon}`} alt="logo" />
            </NavLink>
          </div>

          <div className={`${cx.menuList}`}>
            <ul className={`${cx.scroll}`}>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/company/">
                  <div className={`${cx.menuIcon}`}>
                    <AiOutlineDashboard className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Dashboard</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/company/employee">
                  <div className={`${cx.menuIcon}`}>
                    <AiOutlineUser className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Employees</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/company/customer">
                  <div className={`${cx.menuIcon}`}>
                    <AiOutlineUser className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Customers</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/company/coupon">
                  <div className={`${cx.menuIcon}`}>
                    <FaTicketAlt className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Coupons</div>
                </NavLink>
              </li>
              <li className={`${reportsList ? `${cx.active}` : ''}`}>
                <Button
                  type="button"
                  onClick={() => {
                    setReportsList(!reportsList);
                  }}
                >
                  <div className={`${cx.menuIcon}`}>
                  <FaRegListAlt className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Reports</div>
                </Button>
                <ul className={`${cx.first}`}>
                  <li>
                    <NavLink to="/company/reports/customer">
                      <div className={`${cx.menuName}`}>Customer Reports</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/reports/coupon">
                      <div className={`${cx.menuName}`}>Coupon Reports</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/reports/transition">
                      <div className={`${cx.menuName}`}>Wallet Transaction</div>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>




          </div>
        </div>
      </aside>
    </>
  );
};

export default CompanySidebar;
