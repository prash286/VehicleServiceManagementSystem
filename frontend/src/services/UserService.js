import httpClient from "../http_common/userHttpCommon";

//register
const create = (data) => {
  return httpClient.post("register", data);
};
//sign in
const signin = (data) => {
  return httpClient.post("/login", data);
};
//update
const update = (data, id) => {
  return httpClient.put(`/update/${id}`, data);
};
//delete user
const deleteUser = (id) => {
  return httpClient.delete(`/delete/${id}`);
};
//send link for change psd by email
const sendLink=(email)=>{
  return httpClient.get(`/sendemail/${email}`);
};
//
const submitNewPassword=(data)=>{
  return httpClient.post("/changepass",data);
};
export default { create, signin, update,deleteUser,sendLink,submitNewPassword,};

