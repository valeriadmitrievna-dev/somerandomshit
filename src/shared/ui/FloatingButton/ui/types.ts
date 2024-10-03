import { ButtonHTMLAttributes, FC, SVGProps } from "react";

export enum FloatingButtonVariant {
  primary = "primary",
  error = "error",
  warning = "warning",
  success = "success",
  outline = "outline",
  default = "default",
  ghost = "ghost",
}

export enum FloatingButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export interface FloatingButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "onClick"
  > {
  icon: FC<SVGProps<SVGSVGElement>>;
  variant?: keyof typeof FloatingButtonVariant;
  size?: keyof typeof FloatingButtonSize;
  href?: string;
}
