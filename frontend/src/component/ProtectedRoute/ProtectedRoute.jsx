import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  let navigate = useNavigate();
  let Cmp = props.Cmp;
  let user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/loginpage");
    }
  });
  return (
    <>
      <Cmp />
    </>
  );
};
export default Protected;
