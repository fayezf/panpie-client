import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefsLayout from "../layout/chefsLayout";
import Chefs from "../pages/Chefs/Chefs/Chefs";

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
                element: <Chefs></Chefs>
            }
        ]
    }
])

export default router;