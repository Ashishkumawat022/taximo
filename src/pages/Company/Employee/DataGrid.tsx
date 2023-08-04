import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
//import { useNavigate } from "react-router-dom";
import tb from "../../../assets/stylesheet/datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import { Status } from "../../../components/Company/Forms";

const StatusButton = (props:any) => {
  let { params } = props;
  return (
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
            <MdEdit />
          </NavLink>
        </li>
        <li>
          <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
            <AiFillDelete />
          </NavLink>
        </li>
        <li>
          <Status />
        </li>
      </ul>
    </div>
  );
};

const columns = [
  { field: "id", headerName: "Sr No",flex:1,minWidth:60,},
  { field: "name",headerName: "Employee Name",flex:1, minWidth:60,},
  { field: "email",headerName: "Employee Email",flex:1,minWidth:120,},
  { field: "designation", headerName: "Employee Designation",flex:1,minWidth:150,},
  { field: "action",headerName: "Action",flex:1, minWidth:200,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:2,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:3,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:4,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:5,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:6,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:7,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:8,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:9,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:10,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
  },
  {
    id:11,
    name:"Suresh Kumar",
    email:"suresh@gmail.com",
    designation:"Manager",
    action:"action"
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

