import { configureStore } from "@reduxjs/toolkit";
import { homespacesApi } from "../services/homespaces";
import { roomsApi } from "@/services/rooms";
import { tasksApi } from "@/services/tasks";
import { usersApi } from "@/services/users";
import { authMiddleware, authReducer } from './auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [homespacesApi.reducerPath]: homespacesApi.reducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authMiddleware,
      homespacesApi.middleware,
      roomsApi.middleware,
      tasksApi.middleware,
      usersApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
