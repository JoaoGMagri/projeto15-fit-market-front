import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../Contexts/auth"
import imageExit from "../../Assets/Images/Exit.png"
import entry from "../../Assets/Images/newEntry.png"
import exit from "../../Assets/Images/newExit.png"

export default function Main() {

    useEffect( () => {

        const URL = "https://fit-market.onrender.com/products"

        const promise = axios.get(URL);
        promise.then((res) => {
            console.log(res.data);
        });
        promise.catch((err) => {

        });

    })

    return (
        <>
            Pagina principal
            <Link to="/login">
                Login
            </Link>
        </>
    )

}