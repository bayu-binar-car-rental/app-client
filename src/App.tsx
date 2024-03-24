import LandingPage from "./pages/user/LandingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import CarListPage from "./pages/admin/Cars/CarListPage";
import CarRentPage from "./pages/admin/Cars/CarRentPage";
import DashboardPage from "./pages/admin/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/admin/Dashboard/AnalyticsPage";
import CarDetailsPage from "./pages/admin/Cars/CarDetailsPage";

import store from "./redux/store.ts";
import { Provider } from "react-redux";

import AuthLayout from "./pages/auth/AuthLayout";

import UserLayout from "./components/features/user/UserLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
