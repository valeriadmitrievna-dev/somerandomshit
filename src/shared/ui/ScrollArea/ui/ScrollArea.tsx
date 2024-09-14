import { FC } from "react";
import { ScrollAreaProps } from "./types";
import cn from "classnames";
import s from "./ScrollArea.module.scss";

const ScrollArea: FC<ScrollAreaProps> = ({ children, className, ...props }) => {
  const scrollAreaCN = cn(s.scrollArea, className);

  return <div className={scrollAreaCN} {...props}>{children}</div>;
};

export default ScrollArea;
