import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userservice from "../services/UserService";
import errorMessage from "./JS/errorMessage";
const UpdatePage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [userRole, setUserRole] = useState("");
  const [active, setActive] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const init = () => {
    if (user) {
      setUserRole(user.userRole);
      setActive(user.active);
      setUserName(user.userName);
      setEmail(user.email);
      setMobileNo(user.mobileNo);
    }
  };
  useEffect(() => {
    init();
  }, []);

  const updateData = (e) => {
    e.preventDefault();
    let data = { userName, email, mobileNo };
    userservice
      .update(data, id)
      .then((response) => {
        let updateData = { id, userName, email, mobileNo, userRole, active };
        sessionStorage.clear();
        sessionStorage.setItem("user", JSON.stringify(updateData));
        alert(response.data);
        navigate("/profilepage");
      })
      .catch((err) => {
        errorMessage(err.response.data.message);
      });
  };
  return (
    <form
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "40rem" }}
    >
      <div
        className="card"
        style={{
          width: "28rem",
          backgroundImage: "linear-gradient(315deg, #abe9cd 97%, #3eadcf 0%)",
        }}
      >
        <h5 style={{ color: "red" }} id="err"></h5>
        <table className="table table-bordereless text-end">
          <tbody>
            <tr>
              <td colSpan={2} align="center" valign="middle">
                <h4>
                  <strong>
                    <u>Edit Profile</u>
                  </strong>
                </h4>
                <span style={{ color: "red" }}>
                  <h6>* All fields are mandetory</h6>
                </span>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>Name: </h6>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Email:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>MobileNo:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </td>
            </tr>
            <tr align="center">
              <td colSpan={2} valign="middle">
                <button
                  type="button"
                  class="btn btn-success btn-md"
                  onClick={(e) => updateData(e)}
                >
                  Update
                </button>
                &nbsp;&nbsp;&nbsp;
                {user.userRole === "CUSTOMER" ? (
                  <button
                    type="button"
                    class="btn btn-primary btn-md"
                    onClick={() => navigate("/profilepage")}
                  >
                    Back
                  </button>
                ) : user.userRole === "MECHANIC" ? (
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    onClick={() => navigate("/profilepage")}
                  >
                    Back
                  </button>
                ) : user.userRole === "SERVICEADVISOR" ? (
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    onClick={() => navigate("/profilepage")}
                  >
                    Back
                  </button>
                ) : user.userRole === "ADMIN" ? (
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    onClick={() => navigate("/profilepage")}
                  >
                    Back
                  </button>
                ) : (
                  <></>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};
export default UpdatePage;
