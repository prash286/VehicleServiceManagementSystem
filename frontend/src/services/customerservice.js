import httpClient from "../httpcommon/customer-http-common";
//make enquiery
const sendEnquiry = (data, id) => {
  return httpClient.post(`/addenquiry/${id}`, data);
};

const getEnquiryStatus = (id) => {
  return httpClient.get(`/enquirystatus/${id}`);
};

const sendServiceReq = (data, id) => {
  return httpClient.post(`/servicerequest/${id}`, data);
};
const getRequestStatus = (id) => {
  return httpClient.get(`/requeststatus/${id}`);
};
const getVehicleServiceStatus = (email) => {
  return httpClient.get(`/servicestatus/${email}`);
};

const getInvoice = (id) => {
  return httpClient.get(`/getinvoice/${id}`);
};
export default {
  sendEnquiry,
  getEnquiryStatus,
  sendServiceReq,
  getRequestStatus,
  getVehicleServiceStatus,
  getInvoice,
};
