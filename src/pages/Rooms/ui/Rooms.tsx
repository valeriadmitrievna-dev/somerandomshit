import { FC, useState } from "react";
import s from "./Rooms.module.scss";
import { PageTitle } from "@/entitites/PageTitle";
import { useSelector } from "react-redux";
import { homespaceIdSelector } from "@/store/auth";
import { useGetRoomsQuery } from "@/store";
import { RoomTile } from "@/entitites/Rooms";
import { RoomsMode } from "./types";
import cn from "classnames";
import GridIcon from "@/shared/icons/grid.svg?react";
import { IconButton } from "@/shared/ui/IconButton";

const RoomsPage: FC = () => {
  const [mode, setMode] = useState<RoomsMode>(RoomsMode.Grid);
  const homespaceId = useSelector(homespaceIdSelector);
  const { data: rooms = [] } = useGetRoomsQuery(homespaceId!, {
    skip: !homespaceId,
  });

  const changeModeHandler = (value: RoomsMode) => {
    if (value !== mode) {
      setMode(value);
    }
  };

  return (
    <div className={s.page}>
      <div className={s.header}>
        <PageTitle standalone>Rooms</PageTitle>
        <div className={s.modes}>
          <IconButton
            variant={mode === RoomsMode.List ? "primary" : "default"}
            onClick={() => changeModeHandler(RoomsMode.List)}
            icon={GridIcon}
          />
          <IconButton
            variant={mode === RoomsMode.Grid ? "primary" : "default"}
            onClick={() => changeModeHandler(RoomsMode.Grid)}
            icon={GridIcon}
          />
        </div>
      </div>
      <div className={cn(s.rooms, s[mode])}>
        {rooms.map((room) => {
          if (mode === RoomsMode.Grid) {
            return <RoomTile key={room.id} {...room} />;
          } else if (mode === RoomsMode.List) {
            return <p>List item: {room.name}</p>;
          } else return null;
        })}
      </div>
    </div>
  );
};

export default RoomsPage;
