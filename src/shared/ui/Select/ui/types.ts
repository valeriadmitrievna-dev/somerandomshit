import { OptionWithIcon } from "@/shared/types/ui";
import { FC } from "react";

export interface SelectProps {
  control?: FC<{ isOpen: boolean; onOpen: () => void; hasValue: boolean }>;
  options: OptionWithIcon[];
}
