import { FC, SVGProps } from 'react';

export interface ListItemProps {
  children: string;
  prefix?: FC<SVGProps<SVGSVGElement>> | false;
  suffix?: FC<SVGProps<SVGSVGElement>> | false;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
