import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root"
import PageError from "../pages/PageError"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../pages/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <><Header /><PageError /><Footer /></>,
        children: [
            {
                path: "",
                element : <Home userId={18} />
            }
        ]
    }
])

export default router