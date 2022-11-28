import { Routes, Route } from "react-router-dom";

import Login from "./Login/index"
import Registration from "./Registration/index"
import Main from "./Main/index"
import Product from './Product/index'
import Cart from './Cart/index'
import Finish from './Finish/index'

export default function RoutesFun(){

    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/finish" element={<Finish />}/>

        </Routes>
    )
    
}