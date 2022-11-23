import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SoonName, Container, FormField, InputField, ButtonField, SpanField } from "../../Assets/Style/Login-Registration"
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { AuthContext } from "../../Contexts/auth"

export default function Registration() {
    
    const { URL_API } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat_password, setRepeat_Password] = useState("");
    const [block, setBlock] = useState(false);

    function finish() {

        setBlock(true)
        const obj = {
            email,
            name,
            password,
            repeat_password
        }

        const promise = axios.post(`${URL_API}/sing-up`, obj);
        promise.then((res) => {
            navigate("/login");
        });
        promise.catch((err) => {
            setBlock(false);
            alert(err.message);
            window.location.reload();
        });

    }

    function submit(event) {
        event.preventDefault();
        finish();
    }

    return (
        <Container>

            <SoonName>MyWallet</SoonName>

            <FormField onSubmit={submit}>

                <InputField
                    type="text"
                    placeholder="Nome"
                    onChange={(item) => setName(item.target.value)}
                    disabled={block}
                    required
                />
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
                <InputField
                    type="password"
                    placeholder="Confirme a senha"
                    onChange={(item) => setRepeat_Password(item.target.value)}
                    disabled={block}
                    required
                />

                <ButtonField type="submit" disabled={block}>
                    {!block ? "Cadastrar" : <ThreeDots color="#FFF" />}
                </ButtonField>

            </FormField>

            <Link to="/login">
                <SpanField>Já tem uma conta? Faça login!</SpanField>
            </Link>
        </Container>
    )

}