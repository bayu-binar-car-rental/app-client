import LandingPage from "./pages/user/LandingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import CarListPage from "./pages/admin/Cars/CarListPage";
import CarRentPage from "./pages/admin/Cars/CarRentPage";
// import CarDetailsPage from "./pages/admin/Cars/CarDetailsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/admin/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/admin/Dashboard/AnalyticsPage";
import CarDetailsPage from "./pages/admin/Cars/CarDetailsPage";
import CarAddPage from "./pages/admin/Cars/CarAddPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
