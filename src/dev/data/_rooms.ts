import { Room } from "@/shared/types";
import { faker } from "@faker-js/faker";
import { homespaces } from "./_homespaces";
import { random } from "lodash";
import { roomIcons } from '@/shared/lib/constants';

const createRoom: () => Room = () => {
  const id = faker.string.uuid();
  const imageIcons = Object.keys(roomIcons) as (keyof typeof roomIcons)[];

  return {
    id,
    name: faker.lorem.word(),
    homespaceId: random(0, 1)
      ? homespaces[0].id
      : homespaces[random(1, homespaces.length - 1)].id,
    imageIcon: imageIcons[random(0, imageIcons.length - 1)]
  };
};

export const rooms: Room[] = faker.helpers.multiple(createRoom, { count: 15 });
