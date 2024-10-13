import { FC, useRef, useState } from "react";
import s from "./Select.module.scss";
import { SelectProps } from "./types";
import { useOnClickOutside, useOpenControl } from "@/shared/lib/hooks";
import { Portal } from "../../Portal";
import { OptionWithIcon } from "@/shared/types/ui";
import CheckmarkIcon from "@/shared/icons/checkmark.svg?react";
import { ScrollArea } from "../../ScrollArea";

const Select: FC<SelectProps> = ({ control: CustomControl, options }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpened, open, close } = useOpenControl(true);

  const [selectedOption, setSelectedOption] = useState<
    OptionWithIcon["value"] | null
  >(null);

  const selectHandler = (value: OptionWithIcon["value"]) => {
    setSelectedOption(value);
    close();
  };

  useOnClickOutside(ref, close);

  return (
    <>
      {!!CustomControl && (
        <CustomControl
          isOpen={isOpened}
          onOpen={open}
          hasValue={selectedOption !== null}
        />
      )}
      {isOpened && (
        <Portal>
          <ScrollArea className={s.wrapper}>
            <div ref={ref} className={s.options}>
              {options.map(({ value, label, icon: Icon }, index) => (
                <div
                  key={`${value}-${index}`}
                  className={s.option}
                  onClick={() => selectHandler(value)}
                >
                  {!!Icon && <Icon className={s.icon} />}
                  <span className={s.label}>{label}</span>
                  {value === selectedOption && (
                    <CheckmarkIcon className={s.checkmark} />
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Portal>
      )}
    </>
  );
};

export default Select;
