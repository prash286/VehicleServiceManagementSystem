import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./component/HomePage";
import RegistrationPage from "./component/RegistrationPage";
import LoginPage from "./component/LoginPage";
import AdminPage from "./component/AdminFun/AdminPage";
import CustomerPage from "./component/CustomerFun/CustomerPage";
import MechanicPage from "./component/MechanicFun/MechanicPage";
import ServiceAdvisorPage from "./component/ServiceAdvisorFun/ServiceAdvisorPage";
import ErrorPage from "./component/ErrorPage";
import ProfilePage from "./component/ProfilePage";
import Protected from "./component/ProtectedRoute/ProtectedRoute";
import CustProtected from "./component/ProtectedRoute/CustomerProtectedRoute";
import AdminProtected from "./component/ProtectedRoute/AdminProtectedRoute";
import MechanicProtected from "./component/ProtectedRoute/MechanicProtectedRoute";
import AdvisorProtected from "./component/ProtectedRoute/AdvisorProtectedRoute";
import NavbarDash from "./component/NavbarDash";
import UpdatePage from "./component/UpdatePage";
import AboutUS from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import CustomerEnquiry from "./component/CustomerFun/MakeEnquiry";
import EnquiryStatus from "./component/CustomerFun/EnquiryStatus";
import ServiceRequset from "./component/CustomerFun/MakeServiceReq";
import ServiceReqStatus from "./component/CustomerFun/ServiceReqStatus";
import VehicleServiceStatus from "./component/CustomerFun/VehicleServiceStatus";
import JobCard from "./component/ServiceAdvisorFun/AddNewJobCard";
import JobCardRecords from "./component/ServiceAdvisorFun/JobCardRecords";
import AssignedJobCards from "./component/MechanicFun/AssignedJobCards";
import InvoiceForm from "./component/MechanicFun/CreateInvoice";
import ServiceRecords from "./component/AdminFun/ServiceRecords";
import Approval from "./component/AdminFun/Approval";
import ViewCustEnquiries from "./component/AdminFun/ViewCustEnquiries";
import ViewCustServiceRequest from "./component/AdminFun/ViewCustServiceReq";
import CustomerDetails from "./component/AdminFun/CustomersDetails";
import ServiceAdvisorsDetails from "./component/AdminFun/ServiceAdvisorsDetails";
import MechanicsDetails from "./component/AdminFun/MechanicsDetails";
import ShowInvoice from "./component/ShowInvoice";
import ForgotPassword from "./component/ForgotPassword";
import ChangePassword from "./component/ChangePassword";
import AddAdmin from "./component/AdminFun/AddAdmin";
function App() {
  return (
    <BrowserRouter>
      <NavbarDash />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUS />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="register/:role" element={<RegistrationPage />} />
        <Route path="loginpage" element={<LoginPage />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="change/:email" element={<ChangePassword />} />

        <Route path="adminpage" element={<AdminProtected Cmp={AdminPage} />} />
        <Route path="addadmin" element={<AdminProtected Cmp={AddAdmin} />} />
        <Route
          path="servicerecords"
          element={<AdminProtected Cmp={ServiceRecords} />}
        />
        <Route path="approveuser" element={<AdminProtected Cmp={Approval} />} />
        <Route
          path="getcustenquiries"
          element={<AdminProtected Cmp={ViewCustEnquiries} />}
        />
        <Route
          path="getcustrequest"
          element={<AdminProtected Cmp={ViewCustServiceRequest} />}
        />
        <Route
          path="custdetails"
          element={<AdminProtected Cmp={CustomerDetails} />}
        />
        <Route
          path="advisordetails"
          element={<AdminProtected Cmp={ServiceAdvisorsDetails} />}
        />
        <Route
          path="mechanicdetails"
          element={<AdminProtected Cmp={MechanicsDetails} />}
        />
        <Route
          path="getbill/:id"
          element={<AdminProtected Cmp={ShowInvoice} />}
        />

        <Route
          path="customerpage"
          element={<CustProtected Cmp={CustomerPage} />}
        />
        <Route
          path="enquiry"
          element={<CustProtected Cmp={CustomerEnquiry} />}
        />
        <Route
          path="enquirystatus"
          element={<CustProtected Cmp={EnquiryStatus} />}
        />
        <Route
          path="servicereq"
          element={<CustProtected Cmp={ServiceRequset} />}
        />
        <Route
          path="requeststatus"
          element={<CustProtected Cmp={ServiceReqStatus} />}
        />
        <Route
          path="vehiclestatus"
          element={<CustProtected Cmp={VehicleServiceStatus} />}
        />
        <Route
          path="showbill/:id"
          element={<CustProtected Cmp={ShowInvoice} />}
        />

        <Route
          path="serviceadvisorpage"
          element={<AdvisorProtected Cmp={ServiceAdvisorPage} />}
        />
        <Route path="addjobcard" element={<AdvisorProtected Cmp={JobCard} />} />
        <Route
          path="records"
          element={<AdvisorProtected Cmp={JobCardRecords} />}
        />
        <Route
          path="mechanicpage"
          element={<MechanicProtected Cmp={MechanicPage} />}
        />
        <Route
          path="assignedjobcard"
          element={<MechanicProtected Cmp={AssignedJobCards} />}
        />
        <Route path="bill" element={<MechanicProtected Cmp={InvoiceForm} />} />
        <Route path="errorpage" element={<ErrorPage />} />
        <Route path="profilepage" element={<Protected Cmp={ProfilePage} />} />
        <Route path="update/:id" element={<Protected Cmp={UpdatePage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
