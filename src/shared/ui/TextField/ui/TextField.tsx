import { ChangeEvent, FC, useRef } from "react";
import s from "./TextField.module.scss";
import cn from "classnames";
import { TextFieldProps } from "./types";
import { uniqueId } from "lodash";

const TextField: FC<TextFieldProps> = ({
  value,
  onChange,
  size,
  label,
  placeholder,
  loading,
  disabled,
  error,
}) => {
  const { current: id } = useRef(uniqueId());
  const textFieldCN = cn(s.textField, s[`textField-${size}`], {
    [s.disabled]: disabled || loading,
    [s.error]: error,
  });

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={textFieldCN}>
      {label && (
        <label htmlFor={id} className={s.label}>
          {label}
        </label>
      )}
      <input
        type='text'
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeValueHandler}
        className={s.input}
        disabled={disabled || loading}
      />
      {error && typeof error === "string" && <p className={s.error}>{error}</p>}
    </div>
  );
};

export default TextField;
