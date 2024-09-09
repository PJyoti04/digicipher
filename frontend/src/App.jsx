import React from 'react'
import Home from './Components/Pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from './Components/Pages/Rules';
import Classic from './Components/Pages/Classic';
import Challenger from './Components/Pages/Challenger';
import Leaderboard from './Components/Pages/Leaderboard';


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
},{
  path: "/leaderboard",
  element: <Leaderboard />
}])
const App = () => {


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App