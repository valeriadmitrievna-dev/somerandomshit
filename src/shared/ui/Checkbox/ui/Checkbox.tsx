import { FC, useEffect, useState } from "react";
import s from "./Checkbox.module.scss";
import { CheckboxProps } from "./types";
import CheckedIcon from "@/shared/icons/checkbox-checked.svg?react";
import UncheckedIcon from "@/shared/icons/square-outline.svg?react";

const Checkbox: FC<CheckboxProps> = ({
  checked: incomingChecked = false,
  onToggle,
  label,
}) => {
  const [checked, setChecked] = useState(incomingChecked);

  const toggleHandler = () => {
    setChecked((curr) => {
      onToggle?.(!curr);
      return !curr;
    });
  };

  useEffect(() => {
    setChecked(incomingChecked);
  }, [incomingChecked]);

  return (
    <div className={s.checkbox} onClick={toggleHandler}>
      {checked ? (
        <CheckedIcon className={s.icon} />
      ) : (
        <UncheckedIcon className={s.icon} />
      )}
      {!!label && <span className={s.label}>{label}</span>}
    </div>
  );
};

export default Checkbox;
