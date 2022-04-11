import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import adminservice from "../../services/adminservice";
const AdminPage = () => {
  const [noOfCustomers, setNoOfCustomers] = useState(0);
  const [noOfMechanics, setNoOfMechanics] = useState(0);
  const [noOfServiceAdvisors, setNoOfServiceAdvisors] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    //for customers
    adminservice
      .getNoOfCustomers()
      .then((response) => {
        setNoOfCustomers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //for service adviosrs
    adminservice
      .getNoOfServiceAdvisors()
      .then((response) => {
        setNoOfServiceAdvisors(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //for mechanics
    adminservice
      .getNoOfMechanics()
      .then((response) => {
        setNoOfMechanics(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Admin page</h3>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <div
                className="card ms-auto"
                style={{ width: "12rem", height: "4rem" }}
                scope="col"
              >
                <div className="card-body alert-info">
                  <img
                    src="./images/profile.png"
                    width="75rem"
                    height="75rem"
                    alt="profile"
                    className="ms-4"
                  />
                  <h5 className="card-title text-center">
                    No of Customers <br />
                    {noOfCustomers}
                  </h5>
                  <br />
                  <h4 align="center">
                    <button
                      className="btn btn-primary btn-md"
                      onClick={() => {
                        navigate("/custdetails");
                      }}
                    >
                      View
                    </button>
                  </h4>
                </div>
              </div>
            </td>
            <td>
              <div
                className="card ms-auto"
                style={{ width: "15rem", height: "4rem" }}
                scope="col"
              >
                <div className="card-body alert-info">
                  <img
                    src="./images/profile.png"
                    width="75rem"
                    height="75rem"
                    alt="profile"
                    className="ms-5"
                  />
                  <h5 className="card-title text-center">
                    No of Service Advisors <br />
                    {noOfServiceAdvisors}
                  </h5>
                  <br />
                  <h4 align="center">
                    <button
                      className="btn btn-primary btn-md"
                      onClick={() => {
                        navigate("/advisordetails");
                      }}
                    >
                      View
                    </button>
                  </h4>
                </div>
              </div>
            </td>
            <td>
              <div
                className="card ms-auto"
                style={{ width: "12rem", height: "4rem" }}
                scope="col"
              >
                <div className="card-body alert-info">
                  <img
                    src="./images/profile.png"
                    width="75rem"
                    height="75rem"
                    alt="profile"
                    className="ms-5"
                  />
                  <h5 className="card-title text-center">
                    No of Mechanics <br />
                    {noOfMechanics}
                  </h5>
                  <br />
                  <h4 align="center">
                    <button
                      className="btn btn-primary btn-md"
                      onClick={() => {
                        navigate("/mechanicdetails");
                      }}
                    >
                      View
                    </button>
                  </h4>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AdminPage;
