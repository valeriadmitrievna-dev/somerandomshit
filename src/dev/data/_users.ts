import { Homespace, User, UserRole } from "@/shared/types";
import { faker } from "@faker-js/faker";
import { homespaces } from "./_homespaces";
import { random } from "lodash";

const createUser: (homespace: Homespace) => User = (homespace) => {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    homespaceId: homespace.id,
    role: UserRole.Resident,
  };
};

export const users: User[] = homespaces
  .map((homespace) =>
    faker.helpers.multiple(() => createUser(homespace), { count: random(1, 5) })
  )
  .map(users => {
    users[0].role = UserRole.Housekeeper;
    return users;
  })
  .flat();
