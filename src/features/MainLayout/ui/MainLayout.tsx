import { NavBar } from "@/features/NavBar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import s from "./MainLayout.module.scss";
import { ScrollArea } from "@/shared/ui/ScrollArea";

const MainLayout: FC = () => {
  return (
    <div className={s.layout}>
      <ScrollArea>
        <Outlet />
      </ScrollArea>
      <NavBar />
    </div>
  );
};

export default MainLayout;
