import { FC } from "react";
import { ButtonProps } from "./types";
import cn from "classnames";
import s from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  variant = 'default',
  size = 'medium',
  loading,
  children,
  className,
  icon: Icon,
  ...props
}) => {
  const buttonCN = cn(
    s.button,
    s[`button-${variant}`],
    s[`button-${size}`],
    { [s.loading]: loading },
    className
  );

  return (
    <button className={buttonCN} {...props}>
      {Icon && <Icon className={s.icon} />}
      {children}
    </button>
  );
};

export default Button;
