import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Admin
import AdminLayout from "./pages/admin/AdminLayout";
import CarListPage from "./pages/admin/Cars/CarListPage";
import CarRentPage from "./pages/admin/Cars/CarRentPage";
import DashboardPage from "./pages/admin/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/admin/Dashboard/AnalyticsPage";
import CarDetailsPage from "./pages/admin/Cars/CarDetailsPage";

// Auth
import AuthLayout from "./pages/auth/AuthLayout";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";

// Users
import UserLayout from "./components/features/user/UserLayout";
import LandingPage from "./pages/user/LandingPage";
import CarSearch from "./pages/user/CarSearch.tsx";
import CarList from "./pages/user/CarList.tsx";
import CarDetail from "./pages/user/CarDetail.tsx";
import CarCheckout from "./pages/user/CarCheckout.tsx";

const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/car",
        element: <CarSearch />,
      },
      {
        path: "/car/car-list",
        element: <CarList />,
      },
      {
        path: "/car/:id",
        element: <CarDetail />,
      },
      {
        path: "/car/:id/checkout",
        element: <CarCheckout />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
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
