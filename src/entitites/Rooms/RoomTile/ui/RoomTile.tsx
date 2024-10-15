import { FC } from "react";
import s from "./RoomTile.module.scss";
import { RoomTileProps } from "./types";
import { NavLink } from "react-router-dom";
import { roomIcons } from '@/shared/lib/constants';

const RoomTile: FC<RoomTileProps> = ({ ...room }) => {
  const Icon = roomIcons[room.imageIcon];

  return (
    <NavLink to={`/app/rooms/${room.id}`} className={s.roomTile}>
      <Icon className={s.roomTileIcon} />
      <span className={s.roomTileName}>{room.name}</span>
    </NavLink>
  );
};

export default RoomTile;
