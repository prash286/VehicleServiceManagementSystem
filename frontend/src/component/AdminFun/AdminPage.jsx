import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import adminservice from "../../services/adminservice";
import { useNavigate } from "react-router-dom";
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
    adminservice.getNoOfCustomers().then((response) => {
      setNoOfCustomers(response.data);
    }).catch((err) => {
      console.log(err);
    });

    //for mechanic
    adminservice.getNoOfMechanics().then((response) => {
      setNoOfMechanics(response.data);
    }).catch((err) => {
      console.log(err);
    });
    //for advisors
    adminservice.getNoOfServiceAdvisors().then((response) => {
      setNoOfServiceAdvisors(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div

    >
      <h3>Admin page</h3>
      <table align="center">
        <tbody>
          <td>
            <div className="card ms-2" style={{ width: "12rem", height: "4rem" }}>
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
                <h4 align="center"><button type="button"
                className="btn btn-success btn-md" onClick={() => { navigate("/custdetails") }}>View</button></h4>
              </div>
            </div>
          </td>
          <td>
            <div className="card ms-2" style={{ width: "12rem", height: "4rem" }}>
              <div className="card-body alert-info">
              <img
              src="./images/profile.png"
              width="75rem"
              height="75rem"
              alt="profile"
              className="ms-4"
            />
                <h5 className="card-title text-center">
                  No of Mechanics<br />
                  {noOfMechanics}
                </h5>
                <h4 align="center"><button type="button"
                className="btn btn-success btn-md" onClick={() => { navigate("/mechdetails") }}>View</button></h4>
              </div>
            </div>
          </td>
          <td>
            <div className="card ms-2" style={{ width: "15rem", height: "4rem" }}>
              <div className="card-body alert-info">
              <img
              src="./images/profile.png"
              width="75rem"
              height="75rem"
              alt="profile"
              className="ms-5"
            />
                <h5 className="card-title text-center">
                  No of ServiceAdvisors <br />
                  {noOfServiceAdvisors}
                </h5>
                <h4 align="center"><button type="button"
                className="btn btn-success btn-md" onClick={() => { navigate("/advisordetails") }}>View</button></h4>
              </div>
            </div>
          </td>
        </tbody>
      </table>


    </div>
  );

}
export default AdminPage;