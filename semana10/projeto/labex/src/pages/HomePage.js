import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = () => {


    return (
        <>
            <p>HomePage</p>
            <Link to="/loginpage"><button >Area Administrativa</button></Link>
            <Link to="/listtripspage"><button >Lista de Viagens</button></Link>

        </>
    );
};

export default HomePage;