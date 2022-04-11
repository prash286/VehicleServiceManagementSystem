import httpClient from "../http_common/mechanic-http-common ";
const getAssignedJobCards=(name)=>{
  return  httpClient.get(`/${name}`);
};
const getVehicleParts=()=>{
  return httpClient.get("/parts");

  
};
const addInvoice=(invoice,jid)=>{
  return httpClient.post(`/invoicesubmit/${jid}`,invoice);
};
export default { getAssignedJobCards,getVehicleParts,addInvoice };