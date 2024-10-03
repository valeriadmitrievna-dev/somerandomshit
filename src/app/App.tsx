import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider as RTKProvider } from "react-redux";
import { store } from '@/store';

const App: FC = () => {
  return (
    <RTKProvider store={store}>
      <RouterProvider router={router} />
    </RTKProvider>
  );
};

export default App;
