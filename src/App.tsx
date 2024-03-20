import LandingPage from "./pages/user/landing-page/LandingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import CarListPage from "./pages/admin/Cars/CarListPage";
import CarRentPage from "./pages/admin/Cars/CarRentPage";
import DashboardPage from "./pages/admin/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/admin/Dashboard/AnalyticsPage";
import CarDetailsPage from "./pages/admin/Cars/CarDetailsPage";

import UserLayout from "./pages/user/UserLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/car",
        element: <></>,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "car-list",
        element: <CarListPage />,
      },
      {
        path: "car-list/add-new-car",
        element: <CarDetailsPage />,
      },
      {
        path: "car-list/edit-car/:carId",
        element: <CarDetailsPage />,
      },
      {
        path: "car-rent",
        element: <CarRentPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
