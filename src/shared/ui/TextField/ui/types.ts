export enum TextFieldSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export interface TextFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  size?: keyof typeof TextFieldSize;
  error?: string | boolean;
  loading?: boolean;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}
