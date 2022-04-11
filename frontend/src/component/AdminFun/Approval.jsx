import React from "react";
import { useState, useEffect } from "react";
import adminservice from "../../services/adminservice";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

const Approval = () => {
    let count = 1;
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [bool, setBool] = useState(true);
    useEffect(() => {
        init();
    }, []);
    const init = (() => {
        adminservice.getAllUsersWaitForapproval()
            .then((response) => {

                if (response.data.length==0) {
                    setBool(false);
                }
                setUsers(response.data);

            }).catch((err) => {
                console.log(err);
            });
    });

    const approveUser = (id) => {
        adminservice.acceptUserApproval(id).then((response) => {
            alert(response.data);
            init();
          // window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    };
    const rejectUser=(id)=>{
        UserService.deleteUser(id).then((response)=>{
            alert(response.data);
            init();
        }).catch((err)=>{
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
            <table className="table table-success table-striped">
                {bool === false ? (
                    <tbody>
                        <tr>
                            <td>
                                <h2>No any new Registration...</h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => navigate("/adminpage")}>Back</button>
                            </td>
                        </tr>

                    </tbody>
                ) : (<><thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">userName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile No</th>
                        <th scope="col">Apply for Role</th>
                        <th scope="col">Approval</th>
                        <th scope="col">Reject</th>


                    </tr>
                </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{count++}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.mobileNo}</td>
                                <td>{user.userRole}</td>

                                <td><button 
                                type="button"
                                className="btn btn-success btn-md"
                                onClick={(()=>approveUser(user.id))}>Approve</button></td>

                                <td><button 
                                type="button"
                                className="btn btn-danger btn-md"
                                onClick={(()=>rejectUser(user.id))}>Reject</button></td>

                            </tr>
                        ))}
                        <tr align="center">
                            <td colSpan={7}>
                                <button
                                type="button"
                                className="btn btn-primary btn-md"
                                onClick={() => navigate("/adminpage")}>Back</button>
                            </td>
                        </tr>
                    </tbody>
                </>)}

            </table>
        </div>
    );

}
export default Approval;