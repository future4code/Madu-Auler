import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {


    return (
        <>
            <p>LoginPage</p>
            <Link to="/adminhomepage"><button >Entrar</button></Link>

        </>
    );
};

export default LoginPage;