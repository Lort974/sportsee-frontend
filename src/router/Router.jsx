import { createBrowserRouter, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Root from "../components/Root"
import PageError from "../pages/PageError"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../pages/Home"

const RedirectToHome = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        const id = location.pathname === "/" ? 12 : isNaN(parseInt(location.pathname.split("/")[1])) ? 0 : parseInt(location.pathname.split("/")[1])
        setUserId(id)
        navigate(`/${id}`)
    }, [])

    if (userId === null) {
        return <div>Loading...</div>
    }

    return <><Header /><Home userId={userId} /><Footer /></>
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <RedirectToHome />,
        errorElement: <><Header /><PageError /><Footer /></>,
        children: [
            {
                path: ":id",
                element: <RedirectToHome />,
                errorElement: <><Header /><PageError /><Footer /></>
            }
        ]
    }
])

export default router
