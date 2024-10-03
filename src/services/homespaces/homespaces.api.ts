import { homespaces } from "@/dev/data";
import { Homespace } from "@/shared/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const homespacesApi = createApi({
  reducerPath: "homespacesApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getHomespaces: builder.query<Homespace[], void>({
      queryFn: () => ({ data: homespaces }),
    }),
    getHomespaceById: builder.query<Homespace | null, Homespace["id"]>({
      queryFn: (id) => {
        const homespace = homespaces.find((homespace) => homespace.id === id);
        return homespace
          ? { data: homespace }
          : { error: "Homespace not found" };
      },
    }),
  }),
});

export const { useGetHomespacesQuery, useGetHomespaceByIdQuery } =
  homespacesApi;
