import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { lazy, useEffect } from "react";

import Suspense from "../utils/index";
import { useSelector } from "react-redux";
import Profile from "./dashboard/profile/Profile";

const Home = lazy(() => import("./home/Home"));
const Auth = lazy(() => import("./auth/Auth"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Login = lazy(() => import("./auth/login/Login"));
const Register = lazy(() => import("./auth/register/Register"));
const Products = lazy(() => import("./dashboard/products/Products"));
const Users = lazy(() => import("./dashboard/users/Users"));

const RouteController = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const navigator = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && user) {
      navigator("/dashboard");
    } else if (user === null) {
      navigator("/auth");
    }
  }, [location.pathname, user, navigator]);

  return useRoutes([
    {
      path: "",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "auth",
      element: (
        <Suspense>
          <Auth />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense>
              <Register />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "dashboard",
      element: (
        <Suspense>
          <Dashboard />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "users",
          element: (
            <Suspense>
              <Users />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense>
              <Profile />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default RouteController;
