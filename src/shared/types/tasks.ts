import { Homespace } from "./homespaces";
import { Room } from "./rooms";
import { User } from "./users";

export enum TaskType {
  Default = "default",
}

export const TaskPriority = {
  0: "low",
  1: "medium",
  2: "high",
};

export const TaskStatus = {
  0: "created",
  1: "in progress",
  2: "done",
};

export interface Task {
  id: string;
  title: string;
  done: boolean;
  type: TaskType;
  priority: keyof typeof TaskPriority;
  status: keyof typeof TaskStatus;
  homespaceId: Homespace["id"];
  description?: string;
  deadline?: Date;
  roomId?: Room["id"];
  userId?: User["id"];
}
