import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Admin
import {
  AdminLayout,
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
  CarSearchPage,
  CarListPage,
  CarDetailPage,
  CarCheckoutPage,
  CarPaymentPage,
} from "./pages";

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
        element: <CarSearchPage />,
      },
      {
        path: "/car/car-list",
        element: <CarListPage />,
      },
      {
        path: "/car/:id",
        element: <CarDetailPage />,
      },
      {
        path: "/checkout",
        element: <CarCheckoutPage />,
      },
      {
        path: "/payment/:paymentId",
        element: <CarPaymentPage />,
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
