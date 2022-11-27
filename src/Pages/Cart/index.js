import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/auth"

import TopBar from "../Menus/Top-bar"

export default function Cart() {

    const [totalCarts, setTotalCarts] = useState(0);
    const [status, setStatus] = useState(false);
    const [arrItens, setArrItens] = useState([]);

    const navigate = useNavigate();
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
                CalcTotal(res.data);
                setArrItens(res.data);
                if (res.data.length !== 0) {
                    setStatus(true);
                }
            })
            promise.catch(err => {
                console.log(err.data);
            })

        }else{
            navigate("/");
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
        <ContainerCart>
            <TopBar />

            <BodyCart>
                Carrinho
            </BodyCart>

        </ContainerCart>
    )

}
const ContainerCart = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`
const BodyCart = styled.div`
    margin-top: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`