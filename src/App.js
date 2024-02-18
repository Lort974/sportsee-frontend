import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { useUserData } from './components/Fetch'
import PageError from "./pages/PageError"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"]
      }
    })
  })

  return <>
    <RouterProvider router={router}/>
  </>
}

export default App;
