import { FC } from "react";
import s from "./RoomTile.module.scss";
import { RoomTileProps } from "./types";
import GridIcon from "@/shared/icons/grid.svg?react";
import { NavLink } from "react-router-dom";

const RoomTile: FC<RoomTileProps> = ({ ...room }) => {
  return (
    <NavLink to={`/app/rooms/${room.id}`} className={s.roomTile}>
      <GridIcon className={s.roomTileIcon} />
      <span className={s.roomTileName}>{room.name}</span>
    </NavLink>
  );
};

export default RoomTile;
