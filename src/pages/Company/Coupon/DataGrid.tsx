import React, { useEffect, useState, Fragment } from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
//import { useNavigate } from "react-router-dom";
import tb from "../../../assets/stylesheet/datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import { Status } from "../../../components/Company/Forms";
import { DeletePopup } from "../../../components/Website/Modals";

const StatusButton = (props:any) => {
  let { params } = props;
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
            <MdEdit />
          </NavLink>
        </li>
        <li>
          <button type="button" className={`btn ${tb.delete}`} title="Delete" onClick={handleShow}>
            <AiFillDelete />
          </button>
        </li>
        <li>
          <Status />
        </li>
      </ul>
    </div>
    
    <DeletePopup show={show} handleClose={handleClose} /> 
    </>
  );
};

const columns = [
  { field: "id", headerName: "Sr No",flex:1,minWidth:60,},
  { field: "name",headerName: "Coupon Title",flex:1, minWidth:200,},
  { field: "amount",headerName: "Amount ($)",flex:1,minWidth:120,},
  { field: "sdate", headerName: "Start Date",flex:1,minWidth:150,},
  { field: "edate", headerName: "End Date",flex:1,minWidth:150,},
  { field: "tcoupon", headerName: "Total Coupon",flex:1,minWidth:150,},
  { field: "code", headerName: "Coupon Code",flex:1,minWidth:150,},
  { field: "action",headerName: "Action",flex:1, minWidth:200,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:2,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:3,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:4,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:5,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:6,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:7,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:8,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:9,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
  {
    id:10,
    name:"TaxiMo - Ride Free",
    amount:"22",
    sdate:"24-02-2023",
    edate:"28-02-2023",
    tcoupon:"5",
    code:"ACCTY56Z",
    action:"action"
  },
];


export default function UserDataGrid() {


  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={row}
        autoHeight
        hideFooterPagination={true}
        rowHeight={48}
        headerHeight={48}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
      </div>
  );
}

