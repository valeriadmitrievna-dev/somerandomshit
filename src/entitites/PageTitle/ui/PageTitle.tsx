import { FC } from "react";
import { PageTitleProps } from "./types";
import s from "./PageTitle.module.scss";

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h1 className={s.pageTitle}>{children}</h1>;
};

export default PageTitle;
