import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import WebFont from 'webfontloader';
import { useEffect } from 'react';

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
