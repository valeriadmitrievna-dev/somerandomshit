import { FC } from "react";
import { IconButtonProps } from "./types";
import cn from "classnames";
import s from "./IconButton.module.scss";
import { NavLink } from "react-router-dom";

const IconButton: FC<IconButtonProps> = ({
  variant = "default",
  size = "medium",
  loading,
  className,
  icon: Icon,
  href,
  ...props
}) => {
  const buttonCN = cn(
    s.button,
    s[`button-${variant}`],
    s[`button-${size}`],
    { [s.loading]: loading },
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

export default IconButton;
