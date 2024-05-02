import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../routes/Dashboard";
import Users from "../routes/Users";
import Settings from "../routes/Settings";

export default createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/settings',
    element: <Settings />
  }
])