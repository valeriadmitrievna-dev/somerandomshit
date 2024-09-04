import { FC } from "react";
import { CodeProps } from "./types";
import cn from "classnames";
import s from "./Code.module.scss";

const Code: FC<CodeProps> = ({ children, inline }) => {
  const codeCN = cn(s.code, { [s.inline]: inline });
  return <p className={codeCN}>{children}</p>;
};

export default Code;
