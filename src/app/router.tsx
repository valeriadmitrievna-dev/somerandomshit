import { MainLayout } from "@/features/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <>MainPage</>,
      },
      {
        path: 'todos',
        element: <>Todos</>,
      },
      {
        path: 'rooms',
        element: <>Rooms</>,
      },
      {
        path: 'family',
        element: <>Family</>,
      },
      {
        path: 'profile',
        element: <>Profile</>,
      },
      {
        path: '*',
        element: <>Not Found</>
      }
    ],
  },
]);
