import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import SuperHeroes from "./components/SuperHeroes.jsx";
import RQsuperHeroes from "./components/RQsuperHeroes.jsx";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
const routes = [
  {
    path: "/",
    element: (
      <>
        <App />
        <Home />
      </>
    ),
    // errorElement: <h1>Error</h1>,
  },
  {
    path: "/super",
    element: (
      <>
        <App />
        <SuperHeroes />
      </>
    ),
    // errorElement: <h1>Error</h1>,
  },
  {
    path: "/rq-super",
    element: (
      <>
        <App />
        <RQsuperHeroes />
      </>
    ),
    // errorElement: <h1>Error</h1>,
  },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
