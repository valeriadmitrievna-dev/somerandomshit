import { MainLayout } from "@/features/MainLayout";
import { RoomsPage } from '@/pages/Rooms';
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
        element: <RoomsPage />,
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
