import { Homespace } from './homespaces';
import { Room } from "./rooms";
import { User } from './users';

export enum TaskStatus {}

export enum TaskType {
  Default = "default",
}

export interface Task {
  id: string;
  title: string;
  done: boolean;
  type: TaskType;
  homespaceId: Homespace["id"];
  description?: string;
  deadline?: Date;
  roomId?: Room["id"];
  userId?: User["id"];
}
