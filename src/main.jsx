import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-loading-skeleton/dist/skeleton.css";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./utils/routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";
import "./responsive.css";

// Initialize the router and query client
const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

// Render the app
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} duration="10000" />
    </AuthProvider>
  </QueryClientProvider>
);
