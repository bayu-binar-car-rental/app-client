import LandingPage from "./pages/user/LandingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
