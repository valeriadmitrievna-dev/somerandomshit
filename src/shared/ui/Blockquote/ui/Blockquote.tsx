import { FC } from "react";
import { BlockquoteProps } from "./types";
import s from './Blockquote.module.scss';

const Blockquote: FC<BlockquoteProps> = ({ children }) => {
  return <p className={s.blockquote}>{children}</p>;
};

export default Blockquote;
