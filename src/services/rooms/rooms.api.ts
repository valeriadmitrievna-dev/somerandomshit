import { homespaces, rooms } from "@/dev/data";
import { Homespace, Room } from "@/shared/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getRooms: builder.query<Room[], Homespace["id"]>({
      queryFn: (homespaceId) => {
        const homespace = homespaces.find(
          (homespace) => homespace.id === homespaceId
        );

        return homespace
          ? { data: rooms.filter((room) => room.homespaceId === homespaceId) }
          : { error: "Homespace not found" };
      },
    }),
    getRoomById: builder.query<Room | null, Room["id"]>({
      queryFn: (id) => {
        const room = rooms.find((room) => room.id === id);
        return room ? { data: room } : { error: "Room not found" };
      },
    }),
  }),
});

export const { useGetRoomsQuery, useGetRoomByIdQuery } = roomsApi;
