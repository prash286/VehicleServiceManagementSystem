import httpClient from "../httpcommon/admin-http-common";

//get all jobcards
const getAllJobCards = () => {
  return httpClient.get("/servicerecords");
};

//get all users wait for approval
const getAllUsersWaitForApproval = () => {
  return httpClient.get("/approve");
};

//accpet user registration
const acceptUserRegistration = (cid) => {
  return httpClient.get(`/accepted/${cid}`);
};

//get All customer enquiry
const getAllCustEnquiries = () => {
  return httpClient.get("/getenquries");
};

//send enquiry response
const sendEnquiryResponse = (enquiryResponse, eid) => {
  return httpClient.put(`/submitenquiry/${eid}`, enquiryResponse);
};

//get all service req
const getAllCustServiceRequest = () => {
  return httpClient.get("/getservicerequest");
};

//send service request response
const sendServiceReqResponse = (date, rid) => {
  return httpClient.put(`/updaterequest/${rid}`, date);
};

//get no of customers
const getNoOfCustomers = () => {
  return httpClient.get("/countcustomer");
};
//get no of Service Advisors
const getNoOfServiceAdvisors = () => {
  return httpClient.get("/countserviceadvisor");
};
//get no of Mechanics
const getNoOfMechanics = () => {
  return httpClient.get("/countmechanic");
};

//get all usersDetalls
const getAllUsersDetails = () => {
  return httpClient.get("/getusersdetails");
};
export default {
  getAllJobCards,
  getAllUsersWaitForApproval,
  acceptUserRegistration,
  getAllCustEnquiries,
  sendEnquiryResponse,
  getAllCustServiceRequest,
  sendServiceReqResponse,
  getNoOfCustomers,
  getNoOfMechanics,
  getNoOfServiceAdvisors,
  getAllUsersDetails,
};
