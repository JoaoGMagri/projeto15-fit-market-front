import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../Contexts/auth";

import GlobalStyle from "../Assets/Style/GlobalStyle";
import RoutesFun from "./Routes";

export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />

            <AuthProvider>
                <RoutesFun />
            </AuthProvider>

        </BrowserRouter>
    )

}