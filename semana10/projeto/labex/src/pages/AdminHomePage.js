import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminHomePage = () => {


    return (
        <>
            <p>AdminHomePage</p>
            <Link to="/createtrippage"><button >Create Trips</button></Link>
            <Link to="/tripdetailspage"><button >Trip Details</button></Link>


        </>
    );
};

export default AdminHomePage;