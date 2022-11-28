import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { AuthContext } from "../../Contexts/auth"
import TopBar from "../Menus/Top-bar"
import Remove from "../../Assets/Images/Close.png"

export default function Cart() {

    const [totalCarts, setTotalCarts] = useState(0);
    const [arrItens, setArrItens] = useState([]);
    const [refresh, setRefresh] = useState([]);

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
                calcTotal(res.data);
                setArrItens(res.data);
                if (res.data.length === 0) {
                    navigate("/");
                }
                console.log(res.data);
            })
            promise.catch(err => {
                console.log(err.data);
            })

        } else {
            navigate("/");
        }

    }, [refresh]);

    function calcTotal(res) {
        const total = res.map(item => item.preco);
        let sumTotal = 0;

        for (let i = 0; i < total.length; i++) {
            sumTotal = sumTotal + Number(total[i].replace(/,/, "."));
        }

        setTotalCarts(sumTotal);
    }

    function deleteCart(id) {

        const configDelete = {
            headers: {
                Authorization: `Bearer ${token}`,
                _id: id,
            }
        }

        const promise = axios.delete(`${URL_API}/cartsdelete`, configDelete);

        promise.then(res => {
            setRefresh([]);
        });
        promise.catch(err => {
            console.log(err);
            alert('Erro ao apagar produto tente de novo mais tarde');
            navigate('/');
            window.location.reload();
        });

    }


    console.log(totalCarts);
    return (
        <ContainerCart>
            <TopBar />

            <BodyCart>

                <ProductsList>
                    {arrItens.map((item, i) => {
                        return (
                            <Products key={i}>
                                <div>
                                    <ImgProducts src={item.img} alt={item.name} />

                                    <Description>
                                        <div> {item.name} </div>
                                        <div> R$ {item.preco} </div>
                                    </Description>
                                </div>

                                <img src={Remove} alt="Remover do carrinho" onClick={() => deleteCart(item._id)} />
                            </Products>
                        )
                    })}

                </ProductsList>

                <SideBarCarts>
                    Total: R${totalCarts}
                    <div>
                        <button onClick={() => navigate('/')}>Continuar comprando</button>
                        <button onClick={() => navigate('/finish', arrItens)}>Finalizar pedido</button>
                    </div>
                </SideBarCarts>
            </BodyCart>


        </ContainerCart>
    )

}
const ContainerCart = styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    padding: 15px;
`
const BodyCart = styled.div`
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const ProductsList = styled.div`
    width: 100%;
    margin-bottom: 50px;
`
const Products = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    box-sizing: border-box;

    margin-bottom: 20px;
    background: #A0A0A0;
    
    div{
        display: flex;
    }
    >img{
        cursor: pointer;
    }
`
const ImgProducts = styled.img`
    width: 100px;
    height: 100px;

`
const Description = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
`
const SideBarCarts = styled.div`

    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;

    background: #A0A0A0;
    div{
        display: flex;
        flex-direction: column;
    }

    button{
        width: 160px;
        height: 35px;
        background: #D9D9D9;
        border: 1px solid #000000;
        border-radius: 5px;

        font-family: Arial, Helvetica, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        cursor: pointer;
        transition: 0.25s;
    }
    button:hover{
        filter: brightness(120%);
    }
`