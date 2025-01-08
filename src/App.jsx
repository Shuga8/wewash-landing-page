import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Home, Map, Product } from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <Home />
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <ScrollRestoration />
        <Product />
      </>
    ),
  },
  {
    path: "/map",
    element: (
      <>
        <ScrollRestoration />
        <Map />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
