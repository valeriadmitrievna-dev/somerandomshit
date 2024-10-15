import { FC } from "react";
import s from "./RoomItem.module.scss";
import { RoomItemProps } from "./types";
import { NavLink } from "react-router-dom";
import { roomIcons } from '@/shared/lib/constants';

const RoomItem: FC<RoomItemProps> = ({ ...room }) => {
  const Icon = roomIcons[room.imageIcon];

  return (
    <NavLink to={`/app/rooms/${room.id}`} className={s.roomItem}>
      <Icon className={s.roomItemIcon} />
      <div className={s.roomItemContent}>
        <p className={s.roomItemName}>{room.name}</p>
        <p className={s.roomItemTasksCount}>UNDEFINED tasks</p>
      </div>
    </NavLink>
  );
};

export default RoomItem;
