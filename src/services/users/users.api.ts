import { homespaces, users } from "@/dev/data";
import { Homespace, User } from "@/shared/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], Homespace["id"]>({
      queryFn: (homespaceId) => {
        const homespace = homespaces.find(
          (homespace) => homespace.id === homespaceId
        );

        return homespace
          ? { data: users.filter((user) => user.homespaceId === homespaceId) }
          : { error: "Homespace not found" };
      },
    }),
    getUserById: builder.query<User | null, User["id"]>({
      queryFn: (id) => {
        const user = users.find((user) => user.id === id);
        return user ? { data: user } : { error: "User not found" };
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
