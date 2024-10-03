import { NavBar } from "@/features/NavBar";
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import s from "./MainLayout.module.scss";
import { ScrollArea } from "@/shared/ui/ScrollArea";
import { useSelector } from "react-redux";
import { isAuthSelector } from "@/store/auth";

const MainLayout: FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    if (!isAuth) {
      navigate("/", { replace: true });
    }
  }, [navigate, isAuth]);

  if (isAuth) {
    return (
      <div className={s.layout}>
        <ScrollArea>
          <Outlet />
        </ScrollArea>
        <NavBar />
      </div>
    );
  }

  return <>Loading</>;
};

export default MainLayout;
