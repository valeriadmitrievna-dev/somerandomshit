import { ButtonHTMLAttributes, FC, SVGProps } from "react";

export enum IconButtonVariant {
  primary = "primary",
  error = "error",
  warning = "warning",
  success = "success",
  outline = "outline",
  default = "default",
  ghost = "ghost",
}

export enum IconButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: FC<SVGProps<SVGSVGElement>>;
  variant?: keyof typeof IconButtonVariant;
  size?: keyof typeof IconButtonSize;
  loading?: boolean;
  href?: string;
}
