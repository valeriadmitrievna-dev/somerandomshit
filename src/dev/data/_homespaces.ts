import { Homespace } from "@/shared/types";
import { faker } from "@faker-js/faker";

const HOMESPACE: Homespace = {
  id: "test-homespace",
  name: "Test homespace",
};

const createHomespace: () => Homespace = () => ({
  id: faker.string.uuid(),
  name: faker.lorem.word(),
});

export const homespaces: Homespace[] = [
  HOMESPACE,
  ...faker.helpers.multiple(createHomespace, {
    count: 2,
  }),
];
