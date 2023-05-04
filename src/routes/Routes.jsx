import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefsLayout from "../layout/chefsLayout";
import Recipe from "../pages/Recipe/Recipe/Recipe";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'terms',
        element: <Terms></Terms>
    },
    {
        path: 'blog',
        element: <Blog></Blog>
    },
    {
        path: 'chefs',
        element: <ChefsLayout></ChefsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;