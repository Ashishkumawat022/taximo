import React from "react";
import { Routes, Route } from "react-router-dom";
import { CompanyNavigation } from "./components/Company";
import { Navigation} from "./components/Website";
import { Error404 } from "./components/Website/Error404/Error404";
import { Coupon, Customer, Dashboard, Employee, EditProfile } from "./pages/Company";
import { Transition } from "./pages/Company/Reports";
import {BecomeCompany, BecomeDriver, BookingRide, ForgotPassword, Home, Login, Otp, Payment, PrivacyPolicy, Signup, Success, TermsConditions} from "./pages/Website";
import RegisterOtp from "./pages/Website/RegisterOtp/RegisterOtp";
import ResetPassword from "./pages/Website/ResetPassword/ResetPassword";
import { ChangePassword, Coupons, PaymentPage, Profile, Rides } from "./pages/Website/UserProfile";
import VefiryOtp from "./pages/Website/VerifyOtp/VerifyOtp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="booking-ride" element={<BookingRide />} />
        <Route path="payment" element={<Payment />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="register-otp" element={<RegisterOtp/>} />
        <Route path="verify-otp" element={<VefiryOtp/>} />
        <Route path="otp" element={<Otp />} />
        <Route path="reset_password" element={<ResetPassword/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsConditions />} />
        <Route path="become-driver" element={<BecomeDriver/>} />
        <Route path="become-company" element={<BecomeCompany/>} />
        <Route path="success" element={<Success/>} />

        <Route path="user/profile" element={<Profile />} />
        <Route path="user/change-password" element={<ChangePassword />} />
        <Route path="user/payments" element={<PaymentPage />} />
        <Route path="user/rides" element={<Rides />} />
        <Route path="user/coupons" element={<Coupons />} />
      </Route>

      <Route path='company' element={<CompanyNavigation />}>
        <Route index element={<Dashboard />} />
        <Route path="employee" element={<Employee />} />
        <Route path="customer" element={<Customer />} />
        <Route path="coupon" element={<Coupon />} />
        <Route path="edit-profile" element={<EditProfile />} />
        
        <Route path="reports/transition" element={<Transition />} />
        <Route path="reports/coupon" element={<Transition />} />
        <Route path="reports/customer" element={<Transition />} />
      </Route>
    </Routes>
  );
};

export default App;
