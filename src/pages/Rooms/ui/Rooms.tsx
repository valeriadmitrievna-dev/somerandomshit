import { FC, useState } from "react";
import s from "./Rooms.module.scss";
import { PageTitle } from "@/entitites/PageTitle";
import { useSelector } from "react-redux";
import { homespaceIdSelector } from "@/store/auth";
import { useGetRoomsQuery } from "@/store";
import { RoomItem, RoomTile } from "@/entitites/Rooms";
import { RoomsMode } from "./types";
import cn from "classnames";
import ListIcon from "@/shared/icons/list.svg?react";
import GridIcon from "@/shared/icons/grid.svg?react";
import PlusSpacedIcon from "@/shared/icons/plus-spaced.svg?react";
import { IconButton } from "@/shared/ui/IconButton";
import { FloatingButton } from "@/shared/ui/FloatingButton";

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
      <header className={s.header}>
        <PageTitle standalone>Rooms</PageTitle>
        <div className={s.modes}>
          <IconButton
            variant={mode === RoomsMode.List ? "primary" : "default"}
            onClick={() => changeModeHandler(RoomsMode.List)}
            icon={ListIcon}
          />
          <IconButton
            variant={mode === RoomsMode.Grid ? "primary" : "default"}
            onClick={() => changeModeHandler(RoomsMode.Grid)}
            icon={GridIcon}
          />
        </div>
      </header>
      <div className={cn(s.rooms, s[mode])}>
        {rooms.map((room) => {
          if (mode === RoomsMode.Grid) {
            return <RoomTile key={room.id} {...room} />;
          } else if (mode === RoomsMode.List) {
            return <RoomItem key={room.id} {...room} />;
          } else return null;
        })}
      </div>
      <FloatingButton
        icon={PlusSpacedIcon}
        variant='primary'
        href='/app/rooms/create'
      />
    </div>
  );
};

export default RoomsPage;
