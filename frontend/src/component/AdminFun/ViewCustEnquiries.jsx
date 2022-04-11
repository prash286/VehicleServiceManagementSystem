import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import adminservice from "../../services/adminservice";
const ViewCustEnquiries = () => {
  let navigate = useNavigate();
  const [enquiries, setEnquiries] = useState([]);
  const [enquiryResponse, setEnquiryResponse] = useState("");
  const [bool, setBool] = useState(true);
  let count = 1;

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    adminservice.getAllCustEnquiries().then((response) => {
      //   console.log(response);
      if (response.data.length === 0) {
        setBool(false);
      }
      setEnquiries(response.data);
    });
  };

  const sendResponse = (eid) => {
    adminservice
      .sendEnquiryResponse(enquiryResponse, eid)
      .then((response) => {
        alert(response.data);
        init();
      })
      .catch((err) => {
        console.log(err);
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
      {bool === false ? (
        <div>
          <h3>No any new customer enquiry</h3> <br />
          <button
            className="btn btn-primary btn-md"
            onClick={() => navigate("/adminpage")}
          >
            Back
          </button>
        </div>
      ) : (
        <table className="table table-success table-striped">
          <>
            <thead>
              <tr>
                <th scope="col" align="center">
                  Sr.No
                </th>
                <th scope="col">Customer Name</th>
                <th scope="col">Subject</th>
                <th scope="col">Description</th>
                <th scope="col">Response</th>
                <th scope="col">Send</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td align="center">{count++}</td>
                  <td>{enquiry.custName}</td>
                  <td>{enquiry.subject}</td>
                  <td>{enquiry.description}</td>
                  {!enquiry.response ? (
                    <td>
                      <input
                        type="text"
                        onChange={(e) => {
                          setEnquiryResponse(e.target.value);
                        }}
                      ></input>
                    </td>
                  ) : (
                    <></>
                  )}
                  <td>
                    <button
                      className="btn btn-success btn-md"
                      onClick={() => {
                        sendResponse(enquiry.id);
                      }}
                    >
                      Send
                    </button>
                  </td>
                </tr>
              ))}
              <tr align="center">
                <td colSpan={6}>
                  <button
                    className="btn btn-primary btn-md"
                    onClick={() => navigate("/adminpage")}
                  >
                    Back
                  </button>
                </td>
              </tr>
            </tbody>
          </>
        </table>
      )}
    </div>
  );
};
export default ViewCustEnquiries;
