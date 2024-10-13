import { useState } from "react";

const useOpenControl = (initialState = false) => {
  const [isOpened, setOpened] = useState(initialState);

  const openHandler = () => {
    setOpened(true);
  };

  const closeHandler = () => {
    setOpened(false);
  };

  const toggleHandler = () => {
    setOpened((curr) => !curr);
  };

  return {
    isOpened,
    open: openHandler,
    close: closeHandler,
    toggle: toggleHandler,
  };
};

export default useOpenControl;
