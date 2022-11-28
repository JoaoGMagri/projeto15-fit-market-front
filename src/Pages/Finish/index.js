import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../Contexts/auth"

import TopBar from "../Menus/Top-bar"
import SideBar from "../Menus/Side-bar"
import Loader from "../../Assets/Style/Loader";

export default function Finish() {
    const {token,  URL_API } = useContext(AuthContext);
    const [payment, setPayment] = useState(null);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const navigate = useNavigate();

    function finishBuy(e) {
        e.preventDefault();
        const form = {
            paymentMethod: payment,
            tel: e.target[4].value,
            adress: e.target[5].value
        }
        const promise = axios.post(`${URL_API}/buys`, form, config);
        promise.then(res => {
            navigate('/');
        }
        )
        promise.catch(error => {
            console.log(error);
            console.log('deu ruim');
        }
        )
    }

    return (
        <ContainerMenu payment = { payment }>
            <div>Selecione a forma de pagamento
                <form name="select-payment">
                    <input onClick={(e) => setPayment(e.target.value) }type='radio'
                        id='credit-card'
                        name="payment-method"
                    value='credit-card'/>
                <label htmlFor='credit-card'>Cartão de crédito</label>
                    <input onClick={(e) => setPayment(e.target.value) }type='radio'
                        id='pix'
                        name="payment-method"
                    value='pix'/>
                    <label htmlFor='pix'>Pix</label>
                </form>
            </div>
            <form id="credit-card" onSubmit={(e) => finishBuy(e)} >
                <input type='text' placeholder="Nome impresso no cartão"/>
                <input type='text' placeholder="Número do cartão" />
                <input type='date' placeholder="Validade" />
                <input type='text'placeholder="CVV" />
                <input type='text'placeholder="Telefone" />
                <input type='text' placeholder="Endereço" />
                <button type='submit'>Finalizar compra</button>
            </form>
            <form id="pix" onSubmit={(e) => finishBuy(e)}>
                <input type='text' placeholder="Telefone" />
                <input type='text' placeholder="Endereço" />
                <input placeholder="Algum pix copia e cola aqui"></input>
                <button type='submit'>Finalizar compra</button>
            </form>
            
        </ContainerMenu>
    )
}

const ContainerMenu = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    >form input{
        border-radius: 5px;
        height: 30px;
        background-color: #fff;
        margin-right: 10px;
        margin-bottom: 5px;
        ::placeholder{
            color:gray;
        }
    }
    form#credit-card{
        display: ${props => props.payment === 'credit-card' ? 'block' : 'none'};
    }
    form#pix{
        display: ${props => props.payment === 'pix' ? 'block' : 'none'};
    }
`