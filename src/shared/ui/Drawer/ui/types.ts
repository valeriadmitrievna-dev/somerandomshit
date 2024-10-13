import { FC, PropsWithChildren } from "react";

export interface DrawerProps extends PropsWithChildren {
  title: string;
  control: FC<{ isOpen: boolean; onOpen: () => void }>;
  actions?: FC<{ onClose: () => void }>;
  className?: string;
}
