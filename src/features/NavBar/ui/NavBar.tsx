import { FC } from "react";
import s from "./NavBar.module.scss";
import cn from "classnames";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

import GridIcon from "@/shared/icons/grid.svg?react";
import TodoListIcon from "@/shared/icons/todo-list.svg?react";
import HomeIcon from "@/shared/icons/home.svg?react";
import UsersIcon from "@/shared/icons/users.svg?react";
import UserIcon from "@/shared/icons/user.svg?react";

const NavBar: FC = () => {
  const linkCN = ({ isActive }: NavLinkRenderProps) =>
    cn(s.link, { [s.active]: isActive });

  return (
    <div className={s.navbar}>
      <NavLink to='/' className={linkCN}>
        <GridIcon className={s.linkIcon} />
        <span className={s.linkName}>Main</span>
      </NavLink>
      <NavLink to='/todos' className={linkCN}>
        <TodoListIcon className={s.linkIcon} />
        <span className={s.linkName}>Todos</span>
      </NavLink>
      <NavLink to='/rooms' className={linkCN}>
        <HomeIcon className={s.linkIcon} />
        <span className={s.linkName}>Rooms</span>
      </NavLink>
      <NavLink to='/family' className={linkCN}>
        <UsersIcon className={s.linkIcon} />
        <span className={s.linkName}>Family</span>
      </NavLink>
      <NavLink to='/profile' className={linkCN}>
        <UserIcon className={s.linkIcon} />
        <span className={s.linkName}>Profile</span>
      </NavLink>
    </div>
  );
};

export default NavBar;
