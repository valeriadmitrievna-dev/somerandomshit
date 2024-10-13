import { HTMLAttributes, PropsWithChildren } from "react";

export interface PortalProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  id?: string;
}
