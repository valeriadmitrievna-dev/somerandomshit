import { Room } from "@/shared/types";
import { faker } from "@faker-js/faker";
import { homespaces } from "./_homespaces";
import { random } from "lodash";

const createRoom: () => Room = () => ({
  id: faker.string.uuid(),
  name: faker.lorem.word(),
  homespaceId: homespaces[random(0, homespaces.length - 1)].id,
});

export const rooms: Room[] = faker.helpers.multiple(createRoom, { count: 15 });
