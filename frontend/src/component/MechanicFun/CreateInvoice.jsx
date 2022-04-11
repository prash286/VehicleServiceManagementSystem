import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mechanicservice from "../../services/mechanicservice";
import errorMessage from "../JS/errorMessage";
import validateInvoice from "../JS/invoiceValidate";
const InvoiceForm = () => {
  var cnt = 1;
  const navigate = useNavigate();
  const jobcard = JSON.parse(sessionStorage.getItem("jobcard"));
  const [jid] = useState(jobcard ? jobcard.id : "");
  const [service] = useState(jobcard ? jobcard.serviceType : "");
  const [name] = useState(jobcard ? jobcard.custName : "");
  const [mobile] = useState(jobcard ? jobcard.mobileNo : "");
  const [vehicle] = useState(jobcard ? jobcard.vehicleModel : "");
  const [invoice, setInvoice] = useState({
    custName: name,
    mobileNo: mobile,
    date: "",
    vehicleModel: vehicle,
    serviceType: service,
    billEntry: [],
    labourCharge: "",
    totalAmount: "",
  });

  const [vehicleParts, setVehicleParts] = useState([]);
  useEffect(() => {
    console.log(jid + "" + service);
    init();
  }, []);

  const init = () => {
    mechanicservice
      .getVehicleParts()
      .then((response) => {
        // console.log(response.data);
        setVehicleParts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInvoice = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleCalculate = (e) => {
    let q1 = 0;
    let r1 = 0;
    let amt = 0;
    e.preventDefault();
    var value = document.getElementsByName("partsReplaced");
    var qty = document.getElementsByName("qty");
    var rate = document.getElementsByName("rate");
    // console.log(value);
    for (var i = 0; i < value.length; i++) {
      // console.log(value[i].value);
      var obj = {
        partsReplaced: "",
        qty: "",
        rate: "",
      };
      obj.partsReplaced = value[i].value;
      obj.qty = qty[i].value;
      q1 = parseInt(qty[i].value);
      obj.rate = rate[i].value;
      r1 = parseInt(rate[i].value);
      amt += q1 * r1;
      invoice.billEntry.push(obj);
    }
    amt += parseInt(invoice.labourCharge);
    // console.log(q1 + " " + r1);
    // console.log("Amount " + amt);
    invoice.totalAmount = amt;
    document.getElementById("amt").value = amt;
    // console.log(invoice);
  };
  const getRate = (e) => {
    const key = e.target.value;
    for (var p of vehicleParts) {
      if (p.partName === key) {
        document.getElementById(cnt).value = p.rate;
      }
    }

    // console.log("key " + key);
  };
  function myFunction() {
    cnt++;
    var drop = "";
    drop += `<select id='part' name='partsReplaced'  >`;
    drop += `<option value=''>Select Part</option>`;
    vehicleParts.map(
      (part) =>
        (drop += `<option  value='${part.partName}'>${part.partName}</option>`)
    );
    drop += `</select> <p
    className='text-start'
    style='color:red;'
    id='errpart'
  ></p>`;
    var event = document.getElementsByName("partsReplaced");
    event += document.addEventListener("change", getRate);
    var qty = "";
    qty = `<input type='number' name='qty'   />`;
    var rate = "";
    rate += `<input type='number' name='rate' id=${cnt} />`;

    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML =
      "<h6><span style='color:red;'>*</span>Parts Replaced:</h6>";
    cell2.innerHTML = drop;
    cell3.innerHTML =
      "<h6><span style='color:red;'>*</span>Quantity:</h6> <p className='text-start' style='color:red;' id='errpart'></p> ";
    cell4.innerHTML = qty;
    cell5.innerHTML = "<h6><span style='color:red;'>*</span>Rate:</h6>";
    cell6.innerHTML = rate;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInvoice()) {
      mechanicservice
        .addInvoice(invoice, jid)
        .then((response) => {
          alert(response.data);
          navigate("/assignedjobcard");
        })
        .catch((err) => {
          // errorMessage(err.response.data.message);
          console.log(err.response.data.message);
        });
    } else console.log(invoice);
  };

  function removeRow(a) {
    var table = document.getElementById("myTable");
    var rows = table.rows.length;

    if (rows <= 7) {
      return;
    } else {
      table.deleteRow(rows - 1);
    }
  }
  return (
    <form
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "45rem" }}
    >
      <div
        className="card"
        style={{
          width: "75rem",
          backgroundImage: "linear-gradient(315deg, #abe9cd 97%, #3eadcf 0%)",
        }}
      >
        {/* <h5 style={{ color: "red" }} id="err"></h5> */}
        <table className="table table-bordereless text-end" id={"myTable"}>
          <tbody>
            <tr>
              <td colSpan={2} align="center" valign="middle">
                <h4>
                  <strong>
                    <u>Invoice Form</u>
                  </strong>
                </h4>
                <span style={{ color: "red" }}>
                  <h6>* All fields are mandetory</h6>
                </span>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>Customer Name: </h6>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={invoice.custName}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>MobileNo: </h6>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={invoice.mobileNo}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Date:
                </h6>
              </td>
              <td>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  name="date"
                  value={invoice.date}
                  onChange={handleInvoice}
                />
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errdate"
                ></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>Vehicle Model: </h6>
              </td>
              <td>
                <input
                  className="form-control"
                  type="text"
                  value={invoice.vehicleModel}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Labour Charge:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  id="labour"
                  className="form-control"
                  name="labourCharge"
                  value={invoice.labourCharge}
                  onChange={handleInvoice}
                />
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errlab"
                ></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>Service Type: </h6>
              </td>
              <td>
                <input
                  className="form-control"
                  type="text"
                  value={invoice.serviceType}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td align="right" valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span> Parts Replaced:
                </h6>
              </td>
              <td>
                <select id="part" name="partsReplaced" onChange={getRate}>
                  <option value="">Select Part</option>
                  {vehicleParts.map((parts) => (
                    <option key={parts.id} value={parts.partName}>
                      {parts.partName}
                    </option>
                  ))}
                </select>
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errpart"
                ></p>
              </td>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span> Quantity:
                </h6>
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errqty"
                ></p>
              </td>
              <td>
                <input id="qty" type="number" name="qty" />
              </td>
              <td valign="middle">
                <h6>Rate: </h6>
              </td>
              <td>
                <input type="number" name="rate" id={cnt} />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                  onClick={myFunction}
                >
                  Add Row
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                  onClick={() => removeRow("partsReplaced")}
                >
                  Remove Row
                </button>
              </td>
            </tr>
            <tr align="center"></tr>
          </tbody>
        </table>
        <table align="center">
          <tbody>
            <tr>
              <td align="center">
                <span style={{ color: "red" }}>*</span>
                Total Amount: &nbsp; &nbsp;
                <input type="number" id="amt" readOnly />
                &nbsp; &nbsp;
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                  onClick={handleCalculate}
                >
                  calculate Amount
                </button>
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="erramt"
                ></p>
              </td>
            </tr>
            <tr align="center">
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                  onClick={() => navigate("/assignedjobcard")}
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};
export default InvoiceForm;
