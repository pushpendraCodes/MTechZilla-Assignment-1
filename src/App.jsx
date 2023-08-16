
import './App.css'

import Login from './component/Firebase/Login';
import Timer from './component/Timer'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {


  const router = createBrowserRouter([
    {
      path: "/login",
      element: (

      <Login/>
      ),
    },
    {
      path: "/",
    element:<Timer    />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
