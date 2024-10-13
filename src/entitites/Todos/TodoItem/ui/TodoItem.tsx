import { FC } from "react";
import s from "./TodoItem.module.scss";
import cn from "classnames";
import { TodoItemProps } from "./types";
import { NavLink } from "react-router-dom";
import { useGetRoomByIdQuery, useGetUserByIdQuery } from "@/store";
import { Tag } from "@/shared/ui/Tag";
import { useSelector } from "react-redux";
import { userIdSelector } from "@/store/auth";
import RhombusIcon from "@/shared/icons/rhombus.svg?react";
import ClockIcon from "@/shared/icons/clock.svg?react";
import { TaskPriority, TaskStatus } from "@/shared/types";
import { isBefore, lightFormat } from "date-fns";

const TodoItem: FC<TodoItemProps> = ({ ...todo }) => {
  const iconCN = cn(s.todoItemTitleIcon, s[TaskPriority[todo.priority]]);
  const deadlineCN = cn(s.todoItemDeadline, {
    [s.expired]: todo.deadline && isBefore(new Date(todo.deadline), new Date()),
  });
  const userId = useSelector(userIdSelector);

  const { data: user } = useGetUserByIdQuery(todo.userId!, {
    skip: !todo.userId,
  });

  const { data: room } = useGetRoomByIdQuery(todo.roomId!, {
    skip: !todo.roomId,
  });

  return (
    <NavLink to={`/app/todos/${todo.id}`} className={s.todoItem}>
      <p className={s.todoItemTitle}>
        <RhombusIcon className={iconCN} />
        <span className={s.todoItemTitleText}>{todo.title}</span>
      </p>
      <div className={s.todoItemTags}>
        <Tag
          variant={
            todo.status === 0
              ? "default"
              : todo.status === 1
              ? "warning"
              : "success"
          }
        >
          {TaskStatus[todo.status][0].toUpperCase()}
          {TaskStatus[todo.status].slice(1)}
        </Tag>
        {!!user && (
          <Tag variant={userId === user.id ? "primary" : "default"}>
            {user.name}
          </Tag>
        )}
        {!!room && <Tag>{room.name}</Tag>}
      </div>
      {!!todo.deadline && (
        <p className={deadlineCN}>
          <ClockIcon className={s.todoItemDeadlineIcon} />
          <span className={s.todoItemDeadlineText}>
            {lightFormat(new Date(todo.deadline), "dd.MM.yyyy")}
          </span>
        </p>
      )}
    </NavLink>
  );
};

export default TodoItem;
