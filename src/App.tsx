import LandingPage from "./pages/user/LandingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import CarList from "./components/features/CarList/CarList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <p>Dashboard</p>,
      },
      {
        path: "analytics",
        element: <p>Analytics</p>,
      },
      {
        path: "car-list",
        element: <CarList />,
      },
      {
        path: "car-rent",
        element: <p>Car Rent</p>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
