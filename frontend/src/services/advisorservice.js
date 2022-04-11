import httpClient from "../httpcommon/advisor-http-common";
//get mechanic names
const getMechanicNames = () => {
  return httpClient.get("/mechnames");
};
const addJobCard = (data) => {
  return httpClient.post("/create", data);
};
const getAllJobCards = () => {
  return httpClient.get("/getdetails");
};

const checkCustomer = (email) => {
  return httpClient.get(`/checkcustomer/${email}`);
};
export default { getMechanicNames, addJobCard, getAllJobCards, checkCustomer };
