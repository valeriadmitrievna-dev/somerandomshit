import { FC } from "react";
import s from "./Tag.module.scss";
import cn from "classnames";
import { TagProps } from "./types";

const Tag: FC<TagProps> = ({
  children,
  variant = "default",
  bordered = false,
}) => {
  const tagCN = cn(s.tag, s[`tag-${variant}`], { [s.bordered]: bordered });

  return <span className={tagCN}>{children}</span>;
};

export default Tag;
