import React, { useEffect, useState, Fragment } from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
//import { useNavigate } from "react-router-dom";
import tb from "../../../../assets/stylesheet/datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";

const StatusButton = (props:any) => {
  let { params } = props;
  
  
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
          <button type="button" className={`btn ${tb.delete}`} title="Delete">
            <AiFillDelete />
          </button>
        </li>
      </ul>
    </div>
    
    </>
  );
};
const columns = [
  { field: "id", headerName: "Sr No",flex:1,minWidth:60,},
  { field: "date",headerName: "Date",flex:1, minWidth:60,},
  { field: "debit", headerName: "Debit ($)",flex:1,minWidth:150,},
  { field: "credit", headerName: "Credit ($)",flex:1,minWidth:150,},
  { field: "amount",headerName: "Amount ($)",flex:1,minWidth:120,},
];

const row = [
  {
    id:1,
    date:"24-02-2023",
    debit:"-",
    credit:"+200",
    amount:"300"
  },
  {
    id:2,
    date:"24-02-2023",
    debit:"-",
    credit:"+200",
    amount:"300"
  },
]

export default function UserDataGrid() {
  //const navigate = useNavigate();
  // const handleRowClick = (params:any) => {
  //   navigate(`/courses/class/class-details`);
  // };

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

