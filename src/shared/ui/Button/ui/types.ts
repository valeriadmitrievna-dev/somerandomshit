import { ButtonHTMLAttributes, FC, SVGProps } from "react";

export enum ButtonVariant {
  primary = "primary",
  error = "error",
  warning = "warning",
  success = "success",
  outline = "outline",
  default = "default",
  ghost = "ghost",
}

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  loading?: boolean;
  children?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  href?: string;
  centered?: boolean;
}
