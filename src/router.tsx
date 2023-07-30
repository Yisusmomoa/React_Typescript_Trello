import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                index:true,
                element:<h1>Login</h1>
            },
            {
                path:'/signin',
                element:<h1>Login</h1>
            },
            {
                path:'/signup',
                element:<h1>register</h1>
            },
            {
                path:'/todos',
                element:<h1>todos</h1>
            },
            
        ]
    }
])

export default router