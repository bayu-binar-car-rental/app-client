import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Admin
import {
  AdminLayout,
  CarListPage,
  CarRentPage,
  CarDetailsPage,
  DashboardPage,
  AnalyticsPage,
} from "./pages/admin";

// Auth
import { AuthLayout, SignUpPage, SignInPage } from "./pages/auth";

// Users
import {
  UserLayout,
  LandingPage,
  CarSearch,
  CarList,
  CarDetailPage,
  CarCheckout,
  CarPayment,
} from "./pages/user";

const router = createBrowserRouter([
  {
    element: <UserLayout />,
    errorElement: <div>Page not found</div>,
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
        element: <CarDetailPage />,
      },
      {
        path: "/payment",
        element: <CarCheckout />,
      },
      {
        path: "/payment/:paymentId",
        element: <CarPayment />,
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
