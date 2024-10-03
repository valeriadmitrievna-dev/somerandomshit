import { User, UserRole } from "@/shared/types";
import { faker } from "@faker-js/faker";
import { homespaces } from "./_homespaces";
import { random } from "lodash";

const createUser: (index: number) => User = (index) => {
  return {
    id: index ? faker.string.uuid() : "test-user",
    name: index ? faker.person.firstName() : "testuser",
    homespaceId: homespaces[0].id,
    role: index ? UserRole.Resident : UserRole.Housekeeper,
  };
};

export const users: User[] = faker.helpers.multiple(
  (_, index) => createUser(index),
  { count: random(1, 5) }
);
