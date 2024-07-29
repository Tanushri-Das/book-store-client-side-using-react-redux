import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import MyWishlist from "../Pages/MyWishlist/MyWishlist";
import Books from "../Pages/Books/Books/Books";

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
                path:"/books",
                element:<Books/>
            },
            {
                path:"/myCart",
                element:<MyCart/>
            },
            {
                path:"/myWishlists",
                element:<MyWishlist/>
            }
        ]
    }
])
export default routes;