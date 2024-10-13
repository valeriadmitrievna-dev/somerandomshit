import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "@/features/AuthLayout";
import { MainLayout } from "@/features/MainLayout";

import { NotFoundPage } from "@/pages/NotFound";
import { AuthPage } from "@/pages/Auth";
import { ProfilePage } from "@/pages/Profile";
import { RoomsPage } from "@/pages/Rooms";
import { SignInPage } from "@/pages/SignIn";
import { TodosPage } from '@/pages/Todos';

export const router = createBrowserRouter([
  {
    path: "app",
    element: <MainLayout />,
    children: [
      {
        path: "main",
        element: <>MainPage</>,
      },
      {
        path: "todos",
        children: [
          { index: true, element: <TodosPage /> },
          { path: ':todoId', element: <>current todo with id</> }
        ]
      },
      {
        path: "rooms",
        children: [
          { index: true, element: <RoomsPage /> },
          { path: ':roomId', element: <>current room with id</> }
        ]
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
    element: <NotFoundPage />,
  },
]);
