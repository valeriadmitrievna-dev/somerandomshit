import { Homespace } from "./homespaces";

export interface Room {
  id: string;
  name: string;
  image?: string;
  homespaceId: Homespace["id"];
  tasksCount?: number;
}
