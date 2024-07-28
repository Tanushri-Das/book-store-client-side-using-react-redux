import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products/Products";
import MyCart from "../Pages/MyCart/MyCart";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/myCart",
                element:<MyCart/>
            }
        ]
    }
])
export default routes;