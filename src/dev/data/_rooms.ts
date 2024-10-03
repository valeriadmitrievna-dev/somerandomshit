import { Room } from "@/shared/types";
import { faker } from "@faker-js/faker";
import { homespaces } from "./_homespaces";
import { random } from "lodash";
import { tasks } from "./_tasks";

const createRoom: () => Room = () => {
  const id = faker.string.uuid();

  return {
    id,
    name: faker.lorem.word(),
    homespaceId: random(0, 1)
      ? homespaces[0].id
      : homespaces[random(1, homespaces.length - 1)].id,
    tasksCount: tasks.filter((task) => task.roomId === id).length,
  };
};

export const rooms: Room[] = faker.helpers.multiple(createRoom, { count: 15 });
