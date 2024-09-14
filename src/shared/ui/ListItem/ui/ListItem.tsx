import { FC } from "react";
import { ListItemProps } from "./types";
import s from "./ListItem.module.scss";
import cn from "classnames";

const ListItem: FC<ListItemProps> = ({
  children,
  prefix: Prefix,
  suffix: Suffix,
  disabled,
  selected,
  onClick,
}) => {
  const listItemCN = cn(s.listItem, {
    [s.disabled]: disabled,
    [s.selected]: selected,
    [s.hasPrefix]: !!Prefix,
  });

  return (
    <div className={listItemCN} onClick={onClick}>
      {Prefix && <Prefix className={s.icon} />}
      {children}
      {Suffix && <Suffix className={s.icon} />}
    </div>
  );
};

export default ListItem;
