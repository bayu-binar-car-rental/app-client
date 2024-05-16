import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Admin
import {
  AdminLayout,
  CarRentPage,
  AdminCarDetailsPage,
  DashboardPage,
  AnalyticsPage,
  AdminCarListPage,
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
  UserTransactionsPage,
} from "./pages/user";
import ProfileLayout from "./layouts/ProfileLayout";

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
      // #region Profile
      {
        element: <ProfileLayout />,
        children: [
          {
            path: "/profile/:userId",
            element: <h1>Profile Page</h1>,
          },
          {
            path: "/profile/:userId/transactions",
            element: <UserTransactionsPage />,
          },
          {
            path: "/profile/:userId/cars",
            element: <h1>Profile Cars Page</h1>,
          },
        ],
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
        element: <AdminCarListPage />,
      },
      {
        path: "car-list/add-new-car",
        element: <AdminCarDetailsPage />,
      },
      {
        path: "car-list/edit-car/:carId",
        element: <AdminCarDetailsPage />,
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
