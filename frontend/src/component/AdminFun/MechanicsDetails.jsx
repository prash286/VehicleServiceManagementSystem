import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import adminservice from "../../services/adminservice";
const MechanicsDetails = () => {
  const [usersDetails, setUsersDetails] = useState([]);
  let count = 1;
  let navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    adminservice.getAllUsersDetails().then((response) => {
      setUsersDetails(response.data);
    });
  };

  return (
    <div
      style={{
        height: "88.8vh",
        background:
          "linear-gradient(to bottom right, #33ccff 29%, #ff33cc 100%)",
      }}
    >
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col" align="center">
              Sr.No
            </th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails.map((user) =>
            user.userRole === "MECHANIC" && user.active === true ? (
              <tr>
                <td>{count++}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
              </tr>
            ) : (
              <></>
            )
          )}
          <tr align="center">
            <td colSpan={4}>
              <button
                className="btn btn-primary btn-md"
                onClick={() => navigate("/adminpage")}
              >
                Back
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default MechanicsDetails;
