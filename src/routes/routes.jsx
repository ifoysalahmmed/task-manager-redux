import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tasks from "../pages/Tasks";
import Archive from "../pages/Archive";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default routes;
