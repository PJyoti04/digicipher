import React, { useEffect, useState } from "react";
import Home from "./Components/Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./Components/Pages/Rules";
import Classic from "./Components/Pages/Classic";
import Challenger from "./Components/Pages/Challenger";
import Leaderboard from "./Components/Pages/Leaderboard";
import Loader from "./Components/Pages/Loader";

// Define the appRouter here
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/classic",
    element: <Classic />,
  },
  {
    path: "/challenger",
    element: <Challenger />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return <RouterProvider router={appRouter} />; // Render RouterProvider after loading
};

export default App;
