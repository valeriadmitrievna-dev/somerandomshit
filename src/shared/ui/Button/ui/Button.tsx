import { FC } from "react";
import { ButtonProps } from "./types";
import cn from "classnames";
import s from "./Button.module.scss";
import { NavLink } from "react-router-dom";

const Button: FC<ButtonProps> = ({
  variant = "default",
  size = "medium",
  loading,
  children,
  className,
  icon: Icon,
  href,
  centered,
  ...props
}) => {
  const buttonCN = cn(
    s.button,
    s[`button-${variant}`],
    s[`button-${size}`],
    { [s.loading]: loading, [s.centered]: centered },
    className
  );

  if (href) {
    return (
      <NavLink to={href} className={buttonCN}>
        {Icon && <Icon className={s.icon} />}
        {children}
      </NavLink>
    );
  }

  return (
    <button className={buttonCN} {...props}>
      {Icon && <Icon className={s.icon} />}
      {children}
    </button>
  );
};

export default Button;
