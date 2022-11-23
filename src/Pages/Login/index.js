import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SoonName, Container, FormField, InputField, ButtonField, SpanField } from "../../Assets/Style/Login-Registration"
import { AuthContext } from "../../Contexts/auth"
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Login() {

    const navigate = useNavigate();
    const { setToken, URL_API } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [block, setBlock] = useState(false);

    function finish() {

        setBlock(true);
        const obj = {
            email: email,
            password: password
        }

        const promise = axios.post(`${URL_API}/sing-in`, obj);
        promise.then((res) => {
            setToken(res.data);

            navigate("/");
        });

        promise.catch((err) => {
            setBlock(false);
            alert(err.response.data.message);
            window.location.reload();
        });

    }

    function submit(event) {
        event.preventDefault();
        finish();
    }


    return(

        <Container>

            <SoonName>MyWallet</SoonName>

            <FormField onSubmit={submit}>

                <InputField
                    type="email"
                    placeholder="E-mail"
                    onChange={(item) => setEmail(item.target.value)}
                    disabled={block}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Senha"
                    onChange={(item) => setPassword(item.target.value)}
                    disabled={block}
                    required
                />

                <ButtonField type="submit" disabled={block}>
                    {!block ? "Entrar" : <ThreeDots color="#FFF"/>}
                </ButtonField>

            </FormField>

            <Link to="/registration">
                <SpanField>Não tem uma conta? Cadastre-se!</SpanField>
            </Link>
        </Container>

    )

}