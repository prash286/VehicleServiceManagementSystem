import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customerservice from "../services/customerservice";
import { FcPrint, FcPhoneAndroid } from "react-icons/fc";
import { BsCircleFill } from "react-icons/bs";
const ShowInvoice = () => {
  let count = 1;
  const { id } = useParams();
  const [invoice, setInvoice] = useState([]);
  const [billEntry, setBillEntry] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    customerservice
      .getInvoice(id)
      .then((response) => {
        // let newArr = [response.data];
        // console.log(response.data.billEntry);
        setInvoice(response.data);
        setBillEntry(response.data.billEntry);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const printBill = () => {
    window.print();
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="container mb-5 mt-3">
          <div className="row d-flex align-items-baseline">
            <div className="col-xl-9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                Invoice <strong>ID:{invoice.id}</strong>
              </p>
            </div>
            <div className="col-xl-3 float-end">
              <a
                className="btn btn-light text-capitalize border-0"
                data-mdb-ripple-color="dark"
                onClick={()=>printBill()}
               
              >
                <FcPrint /> Print
              </a>
            </div>
            <hr />
          </div>

          <div className="container">
            <div className="col-md-12">
              <div className="text-center">
                <i
                  className="fab fa-mdb fa-4x ms-0"
                  style={{ color: "#5d9fc5" }}
                ></i>
                <p className="pt-0">Service Station</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8">
                <ul className="list-unstyled">
                  <li className="text-muted">
                    To:
                    <span style={{ color: "#5d9fc5" }}>{invoice.custName}</span>
                  </li>
                  <li className="text-muted">
                    <FcPhoneAndroid /> {invoice.mobileNo}
                  </li>
                </ul>
              </div>
              <div className="col-xl-4">
                <p className="text-muted">Invoice</p>
                <ul className="list-unstyled">
                  <li className="text-muted">
                    <BsCircleFill
                      className="fas fa-circle"
                      style={{ color: "#84B0CA" }}
                    />
                    <span className="fw-bold"> Creation Date: </span>
                    {invoice.date}
                  </li>
                  <li className="text-muted">
                    <BsCircleFill
                      className="fas fa-circle"
                      style={{ color: "#84B0CA" }}
                    />
                    <span className="fw-bold"> Service Type: </span>
                    {invoice.serviceType}
                  </li>
                </ul>
              </div>
            </div>

            <div className="row my-2 mx-1 justify-content-center">
              <table className="table table-striped table-borderless">
                <thead
                  style={{ backgroundColor: "#84B0CA" }}
                  className="text-white"
                >
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {billEntry.map((a) => (
                    <tr>
                      <td>{count++}</td>
                      <td>{a.partsReplaced}</td>
                      <td>{a.qty}</td>
                      <td>{a.rate}</td>
                      <td>{a.rate * a.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <p className="text-black float-start">
                  <span className="text-black">Labour Charge: </span>
                  <span style={{ fontSize: "25px" }}>
                    {invoice.labourCharge}
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <p className="text-black float-start">
                  <span className="text-black">Total Amount: </span>
                  <span style={{ fontSize: "25px" }}>
                    {invoice.totalAmount}
                  </span>
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xl-10">
                <p>Thank you for coming at our service station</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowInvoice;
