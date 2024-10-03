import { homespaces, rooms, tasks } from '@/dev/data';
import { Homespace, Room, Task } from '@/shared/types';
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], Homespace["id"]>({
      queryFn: (homespaceId) => {
        const homespace = homespaces.find(
          (homespace) => homespace.id === homespaceId
        );

        return homespace
          ? { data: tasks.filter((task) => task.homespaceId === homespaceId) }
          : { error: "Homespace not found" };
      },
    }),
    getTasksByRoomId: builder.query<
      Task[],
      {
        homespaceId: Homespace["id"];
        roomId: Room["id"];
      }
    >({
      queryFn: ({ homespaceId, roomId }) => {
        const homespace = homespaces.find(
          (homespace) => homespace.id === homespaceId
        );

        const room = rooms.find(
          (room) => room.id === roomId && room.homespaceId === homespaceId
        );

        if (!homespace) return { error: "Homespace not found" };
        if (!room) return { error: "Room not found" };

        return {
          data: tasks.filter(
            (task) =>
              task.homespaceId === homespaceId && task.roomId === room.id
          ),
        };
      },
    }),
  }),
});

export const { useGetTasksQuery, useLazyGetTasksByRoomIdQuery } = tasksApi;
