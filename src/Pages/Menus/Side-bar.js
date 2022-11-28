import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Carts from "../../Assets/Images/Shopping Cart.png"

import { AuthContext } from "../../Contexts/auth"

export default function SideBar() {

    const [totalCarts, setTotalCarts] = useState(0);
    const [status, setStatus] = useState(false);


    const { token, URL_API } = useContext(AuthContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        if (token !== null) {

            const promise = axios.get(`${URL_API}/cartsget`, config);
            promise.then(res => {
                CalcTotal(res.data)
                if (res.data.length !== 0) {
                    setStatus(true);
                }
            })
            promise.catch(err => {
                console.log(err.data);
            })

        }

    }, []);

    function CalcTotal(res) {
        const total = res.map(item => item.preco);
        let sumTotal = 0;

        for (let i = 0; i < total.length; i++) {
            sumTotal = sumTotal + Number(total[i].replace(/,/, "."));
        }

        setTotalCarts(sumTotal);
    }

    return (

        <Link to="/cart" >
            
            <ContainerTopBar status={status}>

                <img src={Carts} alt="" />

                <div> Seu Carrinho </div>

                <div> Total: {totalCarts} </div>

            </ContainerTopBar>

        </Link>

    )

}

const ContainerTopBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #A0A0A0;
    
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;

    padding: 15px;
    box-sizing: border-box;

    display: ${props => props.status ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
`