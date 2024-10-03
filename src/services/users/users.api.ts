import { homespaces, users } from "@/dev/data";
import { Homespace, User } from "@/shared/types";
import { login } from "@/store/auth/auth.slice";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fakeBaseQuery<string>(),
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
    login: builder.mutation<
      {
        homespaceId: Homespace["id"];
        userId: User["id"];
      },
      string
    >({
      queryFn: (name) => {
        const user = users.find((user) => user.name === name);
        if (!user) return { error: "User not found" };

        const homespace = homespaces.find(
          (homespace) => homespace.id === user.homespaceId
        );
        if (!homespace) return { error: "Homespace not found" };

        return { data: { homespaceId: homespace.id, userId: user.id } };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            login({
              homespaceId: data.homespaceId,
              userId: data.userId,
            })
          );
        } catch (err) {
          const errorMessage = (err as { error: string }).error;
          console.log(errorMessage);
        }
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useLoginMutation } =
  usersApi;
