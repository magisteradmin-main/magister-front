import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Texto from "./Pages/Texto/Texto";
import Questions from "./Pages/Questions/Questions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Texto" element={<Texto />} />
      <Route path="Questions" element={<Questions />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
