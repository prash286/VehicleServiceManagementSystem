import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  let navigate = useNavigate();
  let user = JSON.parse(sessionStorage.getItem("user"));
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [mobileNo, setMobileNo] = useState();
  let [role, setRole] = useState();
  let [id, setId] = useState();
  useEffect(() => {
    if (user) {
      setName(user.userName);
      setEmail(user.email);
      setMobileNo(user.mobileNo);
      setRole(user.userRole);
      setId(user.id);
    }
  });
  return (
    <form
      className="d-flex justify-content-center align-items-center"
      style={{ height: "40rem" }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            style={{
              backgroundImage:
                "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
            }}
            align="center"
          >
            <img
              src="./images/profile.png"
              width="125rem"
              height="125rem"
              alt="profile"
            />
            <br />
            <br />
            <u>{role} DETAILS</u>
          </li>
          <li className="list-group-item">
            <b>Name:</b> {name}
          </li>
          <li className="list-group-item">
            <b>Email:</b> {email}
          </li>
          <li className="list-group-item">
            <b>MobileNo: </b> {mobileNo}
          </li>
          <li className="list-group-item">
            <b>Role: </b> {role}
          </li>
          
        
         
          


          <li className="list-group-item" align="center">
            <button 
            type="button"
            class="btn btn-success btn-md"
            onClick={() => navigate(`/update/${id}`)}>Edit</button>&nbsp;&nbsp;
            {user.userRole === "CUSTOMER" ? (
              <button
                type="button"
                class="btn btn-primary btn-md"
                onClick={() => navigate("/customerpage")}
              >
                Back
              </button>
            ) : user.userRole === "MECHANIC" ? (
              <button
                type="button"
                class="btn btn-primary btn-md"
                onClick={() => navigate("/mechanicpage")}
              >
                Back
              </button>
            ) : user.userRole === "SERVICEADVISOR" ? (
              <button
                type="button"
                class="btn btn-primary btn-md"
                onClick={() => navigate("/serviceadvisorpage")}
              >
                Back
              </button>
            ) : user.userRole === "ADMIN" ? (
              <button
                type="button"
                class="btn btn-primary btn-md"
                onClick={() => navigate("adminpage")}
              >
                Back
              </button>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
    </form>
  );
};
export default ProfilePage;
