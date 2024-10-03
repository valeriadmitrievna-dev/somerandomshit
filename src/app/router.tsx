import { AuthLayout } from "@/features/AuthLayout";
import { MainLayout } from "@/features/MainLayout";
import { AuthPage } from "@/pages/Auth";
import { ProfilePage } from "@/pages/Profile";
import { RoomsPage } from "@/pages/Rooms";
import { SignInPage } from "@/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "app",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <>MainPage</>,
      },
      {
        path: "todos",
        element: <>Todos</>,
      },
      {
        path: "rooms",
        element: <RoomsPage />,
      },
      {
        path: "family",
        element: <>Family</>,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <>sign up</>,
      },
    ],
  },
  {
    path: "*",
    element: <>Not Found</>,
  },
]);
