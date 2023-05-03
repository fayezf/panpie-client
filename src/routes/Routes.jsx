import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefsLayout from "../layout/chefsLayout";
import Recipe from "../pages/Recipe/Recipe/Recipe";

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
        path: 'chefs',
        element: <ChefsLayout></ChefsLayout>,
        children: [
            {
                path: ':id',
                element: <Recipe></Recipe>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;