import { Middleware } from "@reduxjs/toolkit";
import { login, logout } from "./auth.slice";

export const authMiddleware: Middleware = () => (next) => (action) => {
  if (login.match(action) && action.payload.userId) {
    localStorage.setItem("Authentication", action.payload.userId);
  } else if (logout.match(action)) {
    localStorage.removeItem("Authentication");
  }
  return next(action);
};
