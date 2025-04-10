import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider, useRouteError } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import ResturantMenu from "./Components/ResturantMenu";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/resturants/:resId",
                element:<ResturantMenu/>,
            },
        ],
        errorElement: <Error />
    }
])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);