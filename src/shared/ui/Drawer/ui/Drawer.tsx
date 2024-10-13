import { FC } from "react";
import s from "./Drawer.module.scss";
import { DrawerProps } from "./types";
import { useOpenControl } from "@/shared/lib/hooks";
import { Portal } from "../../Portal";
import CrossIcon from "@/shared/icons/cross.svg?react";
import { IconButton } from "../../IconButton";
import { ScrollArea } from "../../ScrollArea";

const Drawer: FC<DrawerProps> = ({
  control: Control,
  title,
  children,
  actions: Actions,
}) => {
  const { isOpened, open, close } = useOpenControl(true);

  return (
    <>
      <Control isOpen={isOpened} onOpen={open} />
      {isOpened && (
        <Portal className={s.drawer}>
          <div className={s.header}>
            <p className={s.title}>{title}</p>
            <IconButton icon={CrossIcon} variant='ghost' onClick={close} />
          </div>
          <ScrollArea>{children}</ScrollArea>
          {!!Actions && (
            <div className={s.actions}>
              <Actions onClose={close} />
            </div>
          )}
        </Portal>
      )}
    </>
  );
};

export default Drawer;
