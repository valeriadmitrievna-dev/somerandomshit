import { Task, TaskType, User } from "@/shared/types";
import { faker } from "@faker-js/faker";
import { homespaces } from "./_homespaces";
import { random } from "lodash";
import { addMonths, subMonths } from "date-fns";

const createTask: () => Task = () => {
  const homespaceId = random(0, 1)
    ? homespaces[0].id
    : homespaces[random(1, homespaces.length - 1)].id;
  const users: User[] = [];

  return {
    id: faker.string.uuid(),
    homespaceId,
    type: TaskType.Default,
    done: !!random(),
    title: faker.lorem.sentence(),
    ...(users.length ? { userId: users[random(0, users.length - 1)].id } : {}),
    ...(random() ? { description: faker.lorem.sentences(random(1, 3)) } : {}),
    ...(random()
      ? {
          deadline: faker.date.between({
            from: subMonths(new Date(), 1),
            to: addMonths(new Date(), 1),
          }),
        }
      : {}),
  };
};

export const tasks: Task[] = faker.helpers.multiple(createTask, { count: 60 });
