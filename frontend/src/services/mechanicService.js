import httpClient from "../httpcommon/mechanic-http-common";

const getAssignedJobCards = (name) => {
  return httpClient.get(`/${name}`);
};
const getVehicleParts = () => {
  return httpClient.get("/parts");
};
const addInvoice = (data, jid) => {
  return httpClient.post(`/invoicesubmit/${jid}`, data);
};
export default { getAssignedJobCards, getVehicleParts, addInvoice };
