import { Homespace } from "./homespaces";

export enum UserRole {
  Housekeeper = "housekeeper",
  Resident = "resident",
  Child = "child",
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  homespaceId: Homespace["id"];
}
