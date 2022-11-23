import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import UserAnonimo from "../../Assets/Images/userAnonimo.jpeg"
import Enter from "../../Assets/Images/Enter.png"

import { AuthContext } from "../../Contexts/auth"

export default function TopBar() {

    const [stateMenu, setStateMenu] = useState(false);
    const [stateUser, setStateUser] = useState(false);
    const [imgUser, setImgUser] = useState(UserAnonimo);
    const [nameUser, setNameUser] = useState("");

    const { token, URL_API } = useContext(AuthContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect( () => {
        if (token !== null) {
            setStateUser(true);
            getInfo();
        }
    }, []);

    function getInfo() {
        const promise = axios.get(`${URL_API}/getUserInfo`, config);
        promise.then( (res) => {
            console.log(res.data);
            if(res.data.img){
                setImgUser(res.data.img);
            }
            setNameUser(res.data.name);
        });
        promise.catch( (err) => {
            alert(err);
            window.location.reload();
        })
    }

    function openMenu() {

        if (stateMenu) {
            setStateMenu(false);
        } else {
            setStateMenu(true);
        }

    }

    function editImg() {

        const newImg = prompt("Qual a nova URL ")

        const promise = axios.put(`${URL_API}/editImg`, {img: newImg} , config);
        promise.then( (res) => {
            console.log(res.data);
            getInfo();
        });
        promise.catch( (err) => {
            alert(err);
            window.location.reload();
        })

    }

    function logOut() {

        const promise = axios.delete(`${URL_API}/go-out`, config);
        promise.then( (res) => {
            console.log(res.data);
            window.location.reload();
        });
        promise.catch( (err) => {
            alert(err.data.message);
            window.location.reload();
        })
    }

    return (

        <ContainerTopBar>
            <div>
                Fit Market
            </div>

            <div>
                {(stateUser) ? (
                    <>
                        <ImgUser
                            src={imgUser}
                            alt="imagem do usuario"
                            onClick={openMenu}
                        />

                        <Menu status={stateMenu}>
                            <div>Nome do usuario</div>
                            <div>{nameUser}</div>
                            <div>Carrinho</div>
                            <div onClick={editImg}>Editar imagem</div>
                            <div onClick={logOut}>Sair</div>
                        </Menu>
                    </>
                ) : (
                    <Link to="/Login">
                        <img src={Enter} alt="" />
                    </Link>
                )}

            </div>

        </ContainerTopBar>

    )

}

const ContainerTopBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: red;
    
    position: fixed;
    top: 0;
    left: 0;

    padding: 15px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ImgUser = styled.img`
width: 52px;
height: 52px;
border-radius: 100%;
`
const Menu = styled.div`

width: 130px;
height: 147px;
background-color: #FFF;

position: fixed;
top: 60px;
right: 30px;

padding: 6px;
box-sizing: border-box;

display: ${props => props.status ? "flex" : "none"};
align-items: flex-start;
flex-direction: column;

border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;

font-weight: 400;
font-size: 12px;


`