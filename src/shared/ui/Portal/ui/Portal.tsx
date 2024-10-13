import { FC, useEffect, useRef } from "react";
import s from "./Portal.module.scss";
import cn from "classnames";
import { PortalProps } from "./types";
import { createPortal } from 'react-dom';

const Portal: FC<PortalProps> = ({ id: incomingId, className, children, ...props }) => {
  const portalCN = cn(s.portal, className);
  const { current: id } = useRef(incomingId ?? new Date().getTime().toString());
  const wrapper = useRef<HTMLElement>(document.createElement("div"));

  useEffect(() => {
    const current = wrapper.current as HTMLElement;
    if (!current) return;

    current.setAttribute("id", id);
    current.setAttribute("class", portalCN);

    type K = keyof typeof props;

    Object.keys(props).forEach((key) => {
      const val = props[key as K] as K;
      current.setAttribute(key, val);
    });

    document.body.appendChild(current);

    return () => {
      document.body.removeChild(current);
    };
  }, [wrapper, id, portalCN, props]);

  if (!wrapper.current) {
    return <>{null}</>;
  }

  return createPortal(children, wrapper.current)
};

export default Portal;
