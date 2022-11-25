import { Routes, Route } from "react-router-dom";

import Login from "./Login/index"
import Registration from "./Registration/index"
import Main from "./Main/index"
import Product from './Product/index'

export default function RoutesFun(){

    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />

        </Routes>
    )
    
}