import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import cx from "./BookingRide.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Banner1, taxi1 } from "../../../assets/images";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { FaCalendar, FaPhoneAlt } from "react-icons/fa";
import { MoreCar, PayPayment } from "../../../components/Website/Modals";
import { SelectTaxi } from "../../../components/Website";
import { usePlacesWidget } from "react-google-autocomplete";
import axios from "axios";
import FromLocation from "./FromLocation";
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  useLoadScript,
  CircleF,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Last } from "react-bootstrap/esm/PageItem";
interface BookingDetails {
  from?: string;
  to?: string;
}

interface BookingRideLocations {
  pickupAddress: string;
  dropAddress: string;
  pickuplat: number;
  pickuplong: number;
  droplat: number;
  droplong: number;
  bookingStatus: string;
  type?: string;
}

const BookingRide = (props: any) => {
  const location: any = useLocation();
  let data = location?.state?.data;
  //console.log(data, "BookingRidedata")
  const hideButton = localStorage.getItem("userToken");

  const [mapboolean, setMapboolean] = useState(false);
  const [pickupmaplist, setPickupMaplist] = useState({
    lat: 0,
    long: 0,
    formatted_address: "",
    type: "Pickup address",
  });
  // console.log(pickupmaplist,"Bokingpagepickupmaplist")
  const [dropmaplist, setDropMaplist] = useState({
    lat: 0,
    long: 0,
    formatted_address: "",
    type: "drop address",
  });
  const [globalBooking, setGlobalBooking] = useState<BookingRideLocations>({
    pickupAddress: "",
    dropAddress: "",
    pickuplat: 0,
    pickuplong: 0,
    droplat: 0,
    droplong: 0,
    bookingStatus: "",
  });
  // console.log(dropmaplist,"Bokingpagedropmaplist")
  const TransferValue = (latnew: any, longnew: any, formatted_address: any) => {
    setGlobalBooking((prev: BookingRideLocations) => {
      return {
        ...prev,
        droplat: latnew,
        droplong: longnew,
        dropAddress: formatted_address,
        type: "drop address",
      };
    });
  };

  useEffect(() => {
    if (mapboolean === true) {
      Getcategories();
    }
  }, [pickupmaplist]);

  useEffect(() => {
    if (
      (data?.pickuplat && data?.pickuplong) ||
      (data?.droplat && data?.droplong)
    ) {
      setGlobalBooking({ ...data });

      Getcategories(data);
    }
  }, []);
  const [cardlistData, setCardlistData] = useState<any[]>([]);

  useEffect(() => {
    if (hideButton) {
      Getcard();
    }
  }, []);

  const { ref } = usePlacesWidget<any>({
    apiKey: "AIzaSyACOTvRgXOv5eWsgzVBWxrLrR4aOC0E_Po",
    libraries: ["places"],
    language: "en",

    onPlaceSelected: (place: any) => {
      console.log(place, "place");

      console.log(
        place.geometry.location.lat(),
        place.geometry.location.lng(),
        "iconLatLng"
      );
      console.log(data, globalBooking, "dajdljsjkjl 111");
      setGlobalBooking((prev: BookingRideLocations) => {
        return {
          ...prev,
          pickuplat: place.geometry.location.lat(),
          pickuplong: place.geometry.location.lng(),
          pickupAddress: place.formatted_address,
          type: "Pickup address",
        };
      });
      setMapboolean(true);
    },
    options: {
      types: ["address"],
    },
  });
  //----------//
  const [paymentshow, setpaymentShow] = useState(false);
  const handlepaymentClose = () => setpaymentShow(false);
  const handlepaymentShow = () => setpaymentShow(true);
  const cars = [1];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [booking, setBookingDetails] = useState<BookingDetails>();
  const [bookingStatus, setBookingStatus] = useState("now");
  function selectBooking(event: { target: { value: string } }) {
    setBookingStatus(event.target.value);
  }
  // Geolocation.getCurrentPosition()
  //---------------//--------------//
  const [categoriesData, setCategoriesData] = useState<any>([]);
  console.log(categoriesData, "categoriesDataGetcategories");

  function Getcategories(data?: BookingRideLocations) {
    let Getdata = JSON.stringify({
      latitude: data?.pickuplat ? data?.pickuplat : globalBooking.pickuplat,
      longitude: data?.pickuplong ? data?.pickuplong : globalBooking.pickuplong,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_RIDES}/get_categories_withoutToken`,
      headers: {
        "Content-Type": "application/json",
      },
      data: Getdata,
    };
    axios(config)
      .then(function (response) {
        //console.log(response, "Getcategories");
        setCategoriesData(response?.data?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //-------Fare Estimate----------//
  const [fareEstimateData, setFareEstimateData] = useState<any>({});
  function GetFareEstimate(id: string) {
    let Faredata = JSON.stringify({
      category_id: id,
      pickup_lat: globalBooking.pickuplat,
      pickup_long: globalBooking.pickuplong,
      destination_lat: globalBooking.droplat,
      destination_long: globalBooking.droplong,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_RIDES}/fare_estimate_withoutToken`,
      headers: {
        "Content-Type": "application/json",
      },
      data: Faredata,
    };
    axios(config)
      .then(function (response) {
        //console.log(response, "GetFareEstimate");
        setFareEstimateData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //------Get card list Api-------//
  const [loaderStatus, setloaderStatus] = useState("");

  function Getcard() {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_API_PAYMENTS}/list_card`,
      headers: {
        Authorization: JSON.parse(localStorage.getItem("userToken")!),
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response, "Getcard");
        if (response.data.data.length == 0) {
          setloaderStatus("No Card Available");
        } else {
          setloaderStatus("");
        }
        let CardsData = response.data.data;
        setCardlistData(CardsData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //-------------//---------------//
  const OPTIONS = {
    minZoom: 10,
    maxZoom: 13,
  };
  const [clickPin, setClickPin] = useState<any>("");

  const handleiconShow = () => setShow(true);
  const handleOnLoad = (map: any) => {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend({
      lat: globalBooking.pickuplat,
      lng: globalBooking.pickuplong,
    });
    map.fitBounds(bounds);
    console.log(data, globalBooking, "dajdljsjkjl 112");
  };
  //console.log(iconLatLng,"iconLatLng11")
  return (
    <>
      <section className={`${cx.bookingSection}`}>
        <div className={`${cx.bookingForm}`}>
          <div className={`${cx.bookingScroll}`}>
            <Row>
              <div className={`${cx.mobileMapSection}`}>
                <GoogleMap
                  onLoad={handleOnLoad}
                  onClick={(e: any) => {
                    console.log(e, "eeeeee");
                    const { latLng } = e;
                    const lat: any = latLng.lat();
                    const long: any = latLng.long();
                    console.log(lat, long, "latlng");
                    Geocode.fromLatLng(lat, long).then((error: any) => {
                      console.error(error);
                    });
                    setGlobalBooking((prev: BookingRideLocations) => {
                      return {
                        ...prev,
                        pickuplat: lat,
                        pickuplong: long,
                      };
                    });

                    handleiconShow();
                  }}
                  mapContainerStyle={{
                    height: "calc(35vh - 80px)",
                    width: "100%",
                    display: "block",
                    pointerEvents: clickPin,
                  }}
                  //options={OPTIONS}
                  center={{
                    lat: globalBooking.pickuplat,
                    lng: globalBooking.pickuplong,
                  }}
                >
                  <MarkerF
                    position={{
                      lat: globalBooking.pickuplat,
                      lng: globalBooking.pickuplong,
                    }}
                    onLoad={(marker: any) => {
                      console.log(marker, "marker");
                      const customIcon = () =>
                        Object.assign({
                          path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                          fillColor: "#0096FF",
                          fillOpacity: 1,
                        });

                      marker.setIcon(customIcon());
                      return marker;
                    }}
                  ></MarkerF>
                  <MarkerF
                    position={{
                      lat: globalBooking.droplat,
                      lng: globalBooking.droplong,
                    }}
                    onLoad={(marker: any) => {
                      console.log(marker, "marker");
                      const customIcon = () =>
                        Object.assign({
                          path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                          fillColor: "#0096FF",
                          fillOpacity: 1,
                        });

                      marker.setIcon(customIcon());
                      return marker;
                    }}
                  ></MarkerF>
                </GoogleMap>
              </div>
              <Col lg={12} className={`${cx.title} text-left`}>
                <div className={`${cx.heading}`}>Fare estimate</div>
                <p>
                  Sample fares are estimates only and do not reflect variations
                  due to discounts, traffic delays or other factors.
                </p>
              </Col>
              <Col lg={12}>
                <div className={`${st.formBox} ${st.iconForm}`}>
                  <span className={`${st.icon}`}>
                    <MdLocationOn />
                  </span>
                  <Form.Control
                    type="text"
                    placeholder="From"
                    ref={ref}
                    defaultValue={data?.pickupAddress}
                    //   onChange={(event) => {
                    //   setBookingDetails((prev): BookingDetails => {
                    //     return { ...prev, from: event.target.value }
                    //   })
                    // }}
                  />
                </div>
              </Col>
              <FromLocation
                TransferValue={TransferValue}
                DropData={data?.dropAddress}
              />
              <Col lg={12}>
                <div className={`${cx.bookingType}`}>
                  <label className={`${cx.radio}`}>
                    <input
                      type="radio"
                      name="bookingType"
                      checked={bookingStatus === "now"}
                      value="now"
                      onChange={selectBooking}
                    />
                    <span className={`${cx.checkmark}`}></span>
                    Request a Taxi
                  </label>
                  <label className={`${cx.radio}`}>
                    <input
                      type="radio"
                      name="bookingType"
                      checked={bookingStatus === "schedule"}
                      value="schedule"
                      onChange={selectBooking}
                    />
                    <span className={`${cx.checkmark}`}></span>
                    Reserve a Taxi
                  </label>
                  <label className={`${cx.radio}`}>
                    <input
                      type="radio"
                      name="bookingType"
                      checked={bookingStatus === "purchase"}
                      value="purchase"
                      onChange={selectBooking}
                    />
                    <span className={`${cx.checkmark}`}></span>
                    Purchase Coupon
                  </label>
                </div>
              </Col>
              {bookingStatus === "schedule" && (
                <Fragment>
                  <Col lg={6}>
                    <div className={`${st.formBox} ${st.iconForm}`}>
                      <span
                        className={`${st.icon}`}
                        style={{ fontSize: "14px" }}
                      >
                        <FaCalendar />
                      </span>
                      <Form.Control type="date" placeholder="To" />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className={`${st.formBox} ${st.iconForm}`}>
                      <span
                        className={`${st.icon}`}
                        style={{ fontSize: "17px" }}
                      >
                        <MdAccessTimeFilled />
                      </span>
                      <Form.Control type="time" placeholder="To" />
                    </div>
                  </Col>
                </Fragment>
              )}

              <Col lg={12}>
                <div
                  className={`${cx.taxiList} d-flex justify-content-between`}
                >
                  <SelectTaxi
                    categoriesData={categoriesData}
                    GetFareEstimate={GetFareEstimate}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div className={`${st.formBox} ${cx.btnFix}`}>
            <ul>
              <li>
                <span>Fare Estimate :</span>
                <span>${fareEstimateData?.total_fare}</span>
              </li>
              <li>
                <span>XXXX-XXXX-XXXX-1000</span>
                <span>
                  <NavLink to="#" onClick={handlepaymentShow}>
                    Add Card
                  </NavLink>
                </span>
              </li>
            </ul>

            {hideButton ? (
              <Button className={`btn ${st.submitBtn} ${st.fullWidth}`}>
                Confirm
              </Button>
            ) : (
              <Button
                className={`btn ${st.submitBtn} ${st.fullWidth}`}
                disabled
              >
                Confirm
              </Button>
            )}
          </div>
        </div>
        <div className={`${cx.mapSection}`}>
          <GoogleMap
            onLoad={handleOnLoad}
            onClick={(e: any) => {
              console.log(e, "eeeeee");
              const { latLng } = e;
              const lat: any = latLng.lat();
              const long: any = latLng.long();
              console.log(lat, long, "latlng");
              Geocode.fromLatLng(lat, long).then((error: any) => {
                console.error(error);
              });

              setGlobalBooking((prev: BookingRideLocations) => {
                return {
                  ...prev,
                  pickuplat: lat,
                  pickuplong: long,
                };
              });
              handleiconShow();
            }}
            mapContainerStyle={{
              height: "calc(100vh - 80px)",
              width: "100%",
              display: "block",
              pointerEvents: clickPin,
            }}
            //options={OPTIONS}
            center={{
              lat: globalBooking.pickuplat,
              lng: globalBooking.pickuplong,
            }}
          >
            <MarkerF
              position={{
                lat: globalBooking.pickuplat,
                lng: globalBooking.pickuplong,
              }}
              onLoad={(marker: any) => {
                const customIcon = () =>
                  Object.assign({
                    path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                    fillColor: "#00ff00",
                    fillOpacity: 1,
                    strokeWidth: 1,
                    strokeColor: "black",
                  });

                marker.setIcon(customIcon());
                return marker;
              }}
            ></MarkerF>
            <MarkerF
              position={{
                lat: globalBooking?.droplat,
                lng: globalBooking?.droplong,
              }}
              onLoad={(marker: any) => {
                console.log(marker, "marker");
                const customIcon = () =>
                  Object.assign({
                    path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                    fillColor: "#FF0000",
                    fillOpacity: 1,
                    strokeWidth: 1,
                    strokeColor: "black",
                  });

                marker.setIcon(customIcon());
                return marker;
              }}
            ></MarkerF>
          </GoogleMap>
        </div>
      </section>

      <MoreCar show={show} handleClose={handleClose} />

      <PayPayment
        paymentshow={paymentshow}
        handlepaymentClose={handlepaymentClose}
        fareEstimateData={fareEstimateData}
        Getcard={Getcard}
        cardlistData={cardlistData}
        loaderStatus={loaderStatus}
      />
    </>
  );
};

export default BookingRide;
