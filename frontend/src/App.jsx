import React from 'react'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from './Components/Rules';
import Classic from './Components/Classic';
import Challenger from './Components/Challenger';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Home />,
},{
  path: "/rules",
  element: <Rules />
},{
  path: "/classic",
  element: <Classic />
},{
  path: "/challenger",
  element: <Challenger />
}])
const App = () => {


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App