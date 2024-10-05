<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
=======
import React from "react";
import Home from "./Components/Pages/Home";
import { ChakraProvider } from '@chakra-ui/react'
>>>>>>> main
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./Pages/Rules";
import Classic from "./Pages/Classic";
import Challenger from "./Pages/Challenger";
import Leaderboard from "./Pages/Leaderboard"; // Corrected import
import Loader from "./Components/Loader"; // Corrected import


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
<<<<<<< HEAD
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
=======
  return (
    <ChakraProvider>
          <RouterProvider router = {appRouter}></RouterProvider>
    </ChakraProvider>
  );
>>>>>>> main
};

export default App;
