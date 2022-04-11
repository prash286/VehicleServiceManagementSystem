import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AdminProtected = (props) => {
  let navigate = useNavigate();
  let Cmp = props.Cmp;
  let user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    if (
      !user ||
      user.userRole === "CUSTOMER" ||
      user.userRole === "MECHANIC" ||
      user.userRole === "SERVICEADVISOR"
    ) {
      navigate("/loginpage");
    }
  });
  return (
    <>
      <Cmp />
    </>
  );
};
export default AdminProtected;
