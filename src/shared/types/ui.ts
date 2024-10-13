import { FC, SVGProps } from "react";

export interface DefaultOption {
  value: number | string;
  label: string;
}

export interface OptionWithIcon extends DefaultOption {
  icon?: FC<SVGProps<SVGSVGElement>>;
}
