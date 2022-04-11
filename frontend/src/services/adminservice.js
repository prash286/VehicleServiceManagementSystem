import httpClient from "../http_common/admin-http-common";
//get all jobcards
const getAllJobCards=()=>{
    return httpClient.get("/servicerecords");
};
const getAllUsersWaitForapproval=()=>{
    return httpClient.get("/approve");
};
//send response for approval
const acceptUserApproval=(cid)=>{
    return httpClient.get(`/accepted/${cid}`);
};
//get cust enquiry
const getAllCustEnquiries=()=>{
    return httpClient.get("/getenquries");
};
//
const sendEnquiryResponse=(enquiryResponse,eid)=>{
    return httpClient.put(`/submitenquiry/${eid}`,enquiryResponse);
};
//get all service req
const getAllCustServiceRequest=()=>{
    return httpClient.get("/getservicerequest");
};
//send service request response
const sendServiceRequestResponse=(date,rid)=>{
return httpClient.put(`/updaterequest/${rid}`,date);
};
//get no.of customers
const getNoOfCustomers=()=>{
    return httpClient.get("/countcustomer");
};
//get no.of advisors
const getNoOfServiceAdvisors=()=>{
    return httpClient.get("/countserviceadvisor");
};
//get no.of mechanic
const getNoOfMechanics=()=>{
    return httpClient.get("/countmechanic");
};
//get all user details
const getAllUsersDetails=()=>{
    return httpClient.get("/getusersdetails");
};
export default 
{
    sendServiceRequestResponse,
    getAllJobCards,getAllUsersWaitForapproval,
    acceptUserApproval,getAllCustEnquiries,
    sendEnquiryResponse,
    getNoOfCustomers,
    getNoOfServiceAdvisors,
    getNoOfMechanics,
    getAllCustServiceRequest,
    getAllUsersDetails
};