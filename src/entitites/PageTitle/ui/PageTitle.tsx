import { FC } from "react";
import { PageTitleProps } from "./types";
import s from "./PageTitle.module.scss";
import cn from "classnames";

const PageTitle: FC<PageTitleProps> = ({ children, standalone }) => {
  const pageTitleCN = cn(s.pageTitle, { [s.standalone]: standalone });

  return <h1 className={pageTitleCN}>{children}</h1>;
};

export default PageTitle;
