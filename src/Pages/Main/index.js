import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../Contexts/auth"

import TopBar from "../Menus/Top-bar"

export default function Main() {

    const { URL_API } = useContext(AuthContext);

    useEffect( () => {

        const promise = axios.get(`${URL_API}/products`);
        promise.then((res) => {
            console.log(res.data);
        });
        promise.catch((err) => {

        });

    })

    return (
        <ContainerMain>

            <TopBar/>

            <BodyMain>
                estou aqui
            </BodyMain>
        
        </ContainerMain>
    )

}

const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
`
const BodyMain = styled.div`
    margin-top: 80px;
`