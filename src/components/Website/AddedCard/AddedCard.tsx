import React, { useEffect, useState, Fragment } from "react";
import cx from "./AddedCard.module.scss";
import { NavLink } from "react-router-dom";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { DeletePopup } from "../Modals";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { Button } from "react-bootstrap";

interface AddCardOptions {
  deleteIcon?: boolean;
  radioButton?: boolean;
  cardlistData?: any[];
  loaderStatus?: string;
  Getcard?: () => {};
}
const AddedCard = (props: AddCardOptions) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { deleteIcon, radioButton, cardlistData, Getcard, loaderStatus } = props;
  //----------//-------------//
  const [deleteData, setDeleteData] = useState<any>();
  function CardDelete() {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_API_PAYMENTS}/delete_card/${deleteData}`,
      headers: {
        Authorization: JSON.parse(localStorage.getItem("userToken")!),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(CardDelete, "CardDelete");
        handleClose();
        Getcard && Getcard();
        // setDeleteData(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 //----------set-default-card-----//
 function Defaultcard(cardId:any) {
  let data = JSON.stringify({
    "card_id": cardId
   
  });
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_API_PAYMENTS}/set_default_card`,
    headers: {
      Authorization: JSON.parse(localStorage.getItem("userToken")!),
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(Defaultcard, "Defaultcard");
      Getcard && Getcard();
      //handleClose();
    })
    .catch(function (error) {
      console.log(error);
    });
}
 //---------------//--------------//
  return (
    <>
      {cardlistData &&
        cardlistData.length > 0 &&
        cardlistData?.map((item: any) => {
          return (
            <>
              <button className={`${cx.addedCard} ${cx.radio}`}>
                <ul>
                  <h6>{item.name}</h6>
                  <li>Card Number : {item.number}</li>
                  <li>Brand : {item.brand}</li>
                </ul>

                <AiFillDelete
                 className={`${cx.delet_icon}`} 
                  onClick={() => {
                    handleShow();
                    setDeleteData(item?.card_id);
                  }}  />

                {item.is_default == false ? 
                  (<div className={`${cx.signupPoint}`}>
                    <p><Button className={`${cx.resendBtnBottom}`} onClick={()=>{Defaultcard(item.card_id)}}>Set Default Card</Button></p>
                  </div>):(
                    <div className={`${cx.signupPoint}`}>
                    <p><Button className={`${cx.resendBtnBottom}`} onClick={()=>{Defaultcard(item.card_id)}}>Default Card</Button></p>
                  </div>
                  ) }
              </button>
            </>
          );
        })}
      {loaderStatus && (
        <div className="d-flex justify-content-center">{loaderStatus}</div>
      )}

      {/* {radioButton &&<Fragment><input type="radio" name="cardSelect" /><span className={`${cx.checkmark}`}></span></Fragment> } */}
      {/* {deleteIcon && <button type="button" onClick={handleShow} className={`${cx.deleteBtn}`}><AiFillDelete /></button>} */}

      <DeletePopup
        show={show}
        handleClose={handleClose}
        CardDelete={CardDelete}
      />
    </>
  );
};

export default AddedCard;
