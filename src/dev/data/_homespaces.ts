import { Homespace } from "@/shared/types";
import { faker } from "@faker-js/faker";

const createHomespace: () => Homespace = () => ({
  id: faker.string.uuid(),
  name: faker.lorem.word(),
});

export const homespaces: Homespace[] = faker.helpers.multiple(createHomespace, {
  count: 3,
});
