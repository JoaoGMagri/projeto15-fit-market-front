import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../Contexts/auth"

import TopBar from "../Menus/Top-bar"
import SideBar from "../Menus/Side-bar"

export default function Product() {
    const { URL_API, token } = useContext(AuthContext);
    const product = useLocation().state;
    const navigate = useNavigate();
    console.log(product);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function addCrats() {

        if (!token) {
            alert("Você precisa logar para montar um carrinho");
            navigate("/login");
        } else {

            const promise = axios.post(`${URL_API}/cartspost`, product , config);
            promise.then((res) => {
                console.log(res.data);
                navigate("/cart");
            });
            promise.catch((err) => {
                console.log(err);
            });
        }

    }


    return (
        <ContainerMain>

            <TopBar />

            <BodyMain>
                <div>
                    <img src={product.img} />
                    <h1>{product.name}</h1>
                    <table>
                        <tr>
                            <th>Informações Nutricionais</th>
                            <th>Porção</th>
                        </tr>
                        <p>Valor Energético:
                            <span>
                                {product.Tabela_Nutri.valorEnergetico}
                            </span>
                        </p>
                        <p>Carboidratos:
                            <span>
                                {product.Tabela_Nutri.carboidratos}
                            </span>
                        </p>
                        <p>Proteinas:
                            <span>
                                {product.Tabela_Nutri.proteinas}
                            </span>
                        </p>
                        <p>Gorduras Totais:
                            <span>
                                {product.Tabela_Nutri.gordurasTotais}, das quais:
                            </span>
                        </p>
                        <p>Fibra Alimentar:
                            <span>
                                {product.Tabela_Nutri.fibraAlimentar}
                            </span>
                        </p>
                        <p>Cálcio:
                            <span>
                                {product.Tabela_Nutri.calcio}
                            </span>
                        </p>
                        <p>Preço:
                            <span>
                                {product.preco}
                            </span>
                        </p>
                    </table>
                    <button onClick={addCrats}>Adicionar ao carrinho</button>
                </div>
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
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90vw;
        background-color: white;
        img{
            height: 40vh;
            width: 80vw;
        }
        h1{
            font-size: 22px;
            font-weight: bold;
        }
        button{
            margin-top: 50px;
            border-radius: 10px;
            border: none;
            background-color: aqua;
            height: 30px;
            width: 80vw;
            transition: 0.25s;
            cursor: pointer;
        }
        button:hover{
            transform: scale(1.02);
        }
    }
`