import LandingPage from "./pages/user/LandingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import CarListPage from "./pages/admin/Cars/CarListPage";
import CarDetailsPage from "./pages/admin/Cars/CarDetailsPage";
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
      // Cars
      {
        path: "car-list",
        element: <CarListPage />,
      },
      {
        path: "car-list/add-new-car",
        element: <CarDetailsPage />,
      },
      {
        path: "car-list/:id",
        element: <CarDetailsPage />,
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
