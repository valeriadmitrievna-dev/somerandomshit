import { Homespace, User } from "@/shared/types";

export interface AuthState {
  isAuth: boolean;
  homespaceId: Homespace["id"] | null;
  userId: User["id"] | null;
}
