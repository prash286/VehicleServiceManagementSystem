import httpClient from "../httpcommon/user-http-common";

//register
const create = (data) => {
  return httpClient.post("/register", data);
};

//signin
const signin = (data) => {
  return httpClient.post("/login", data);
};
//update
const update = (data, id) => {
  return httpClient.put(`/update/${id}`, data);
};

//delete
const deleteUser = (id) => {
  return httpClient.delete(`/delete/${id}`);
};

//send link for change password by email
const sendLink = (email) => {
  return httpClient.get(`/sendemail/${email}`);
};

//change password
const submitNewPassword = (data) => {
  return httpClient.post("/changepass", data);
};
export default {
  create,
  signin,
  update,
  deleteUser,
  submitNewPassword,
  sendLink,
};
