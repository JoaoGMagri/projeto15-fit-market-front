import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../Contexts/auth"

import TopBar from "../Menus/Top-bar"
import SideBar from "../Menus/Side-bar"
import Loader from "../../Assets/Style/Loader";

export default function Main() {

    const { URL_API } = useContext(AuthContext);
    const [products, setProducts] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const promise = axios.get(`${URL_API}/products`);
        promise.then((res) => {
            console.log(res.data);
            setTimeout(() => setProducts(res.data), 1000);
        });
        promise.catch((err) => {
            console.log(err);
        });

    }, []);
    console.log(products);
    if (!products)
        return (
            <ContainerMain>

                <TopBar />

                <BodyMain>
                    <Loader/>
                </BodyMain>

                <SideBar />

            </ContainerMain>
        )
    
    
    return (
        <ContainerMain>

            <TopBar/>

            <BodyMain>
                <ul>
                    {products.map((product, index) =>
                        <li key={index} onClick={() => navigate('/product', {state:product})}>
                                <img src={product.img} alt={product.name} />
                                <h1>{product.name}</h1>
                        </li>
                    )}
                </ul>
            </BodyMain>

            <SideBar />
        
        </ContainerMain>
    )

}

const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`
const BodyMain = styled.div`
    margin-top: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    ul{
        background-color: darkgray;
        height: 60vh;
        width: 90vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li{
            text-align: center;
            height: 150px;
            width: 150px;
            cursor: pointer;
        }
        a{
            text-decoration: none;
            color: black;
        }
        img{
            margin-top: 15px;
        height: 150px;
        width: 150px;
        background-color: aliceblue;
        border-radius: 10px;
        transition: 0.25s;
        }
        img:hover{
            filter: brightness(108%);
            transform: scale(1.015);
        }
    }
`