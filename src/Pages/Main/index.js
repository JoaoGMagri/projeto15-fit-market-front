import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../Contexts/auth"

import TopBar from "../Menus/Top-bar"
import Loader from "../../Assets/Style/Loader";

export default function Main() {

    const { URL_API } = useContext(AuthContext);
    const [products, setProducts] = useState(null);

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

            </ContainerMain>
        )
    
    
    return (
        <ContainerMain>

            <TopBar/>

            <BodyMain>
                <ul>
                    {products.map((product, index) =>
                        <li key={index}>
                            <img src={product.img}/>
                            <h1>{product.name}</h1>
                        </li>
                    )}
                </ul>
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
    ul{
        background-color: darkgray;
        height: 60vh;
        width: 90vw;
        display: flex;
        li{
            height: 100px;
            width: 100px;
        }
        img{
        margin-top: 120px;
        height: 80px;
        width: 80px;
    }
    }
    
`