export enum TagVariant {
  primary = "primary",
  error = "error",
  warning = "warning",
  success = "success",
  default = "default",
}

export interface TagProps {
  children: string;
  bordered?: boolean;
  variant?: keyof typeof TagVariant;
}
