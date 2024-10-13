import { FC } from "react";
import s from "./RoomItem.module.scss";
import { RoomItemProps } from "./types";
import GridIcon from "@/shared/icons/grid.svg?react";
import { NavLink } from "react-router-dom";

const RoomItem: FC<RoomItemProps> = ({ ...room }) => {
  return (
    <NavLink to={`/app/rooms/${room.id}`} className={s.roomItem}>
      <GridIcon className={s.roomItemIcon} />
      <div className={s.roomItemContent}>
        <p className={s.roomItemName}>{room.name}</p>
        <p className={s.roomItemTasksCount}>UNDEFINED tasks</p>
      </div>
    </NavLink>
  );
};

export default RoomItem;
