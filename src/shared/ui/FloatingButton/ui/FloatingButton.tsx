import { FC } from "react";
import { FloatingButtonProps } from "./types";
import cn from "classnames";
import s from "./FloatingButton.module.scss";
import { NavLink } from "react-router-dom";

const FloatingButton: FC<FloatingButtonProps> = ({
  variant = "default",
  size = "medium",
  className,
  icon: Icon,
  href,
  ...props
}) => {
  const buttonCN = cn(
    s.button,
    s[`button-${variant}`],
    s[`button-${size}`],
    className
  );

  if (href) {
    return (
      <NavLink to={href} className={buttonCN}>
        {<Icon className={s.icon} />}
      </NavLink>
    );
  }

  return (
    <button className={buttonCN} {...props}>
      {<Icon className={s.icon} />}
    </button>
  );
};

export default FloatingButton;
