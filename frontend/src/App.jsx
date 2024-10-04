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
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Simulate a loading delay of 4 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (loading) {
    return <Loader />; // Show loader when loading is true
  }

  return <RouterProvider router={appRouter} />; // Render RouterProvider after loading
};

export default App;
