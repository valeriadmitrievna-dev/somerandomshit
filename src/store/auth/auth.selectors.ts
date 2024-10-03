import { RootState } from "../store";

export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const homespaceIdSelector = (state: RootState) => state.auth.homespaceId;
export const userIdSelector = (state: RootState) => state.auth.userId;
