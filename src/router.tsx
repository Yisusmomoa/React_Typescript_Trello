import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/signin',
                element:<SignIn />
            },
            {
                path:'/signup',
                element:<SignUp />
            },
            {
                path:'/todos',
                element:<Todos />
            },
            
            
        ]
    }
])

export default router