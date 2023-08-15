
import './App.css'
import Auth from './component/Auth';
import Timer from './component/Timer'
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const[login,setlogin]=useState(false)
  // const[profile,setProfile]=useState()

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Auth setlogin={setlogin}   />
      ),
    },
    {
      path: "/timer",
    element:<Timer  login={login}  />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
