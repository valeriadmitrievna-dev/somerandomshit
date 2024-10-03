import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import s from "./AuthLayout.module.scss";
import { useSelector } from "react-redux";
import { isAuthSelector } from "@/store/auth";

const MainLayout: FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      navigate("/app", { replace: true });
    }
  }, [navigate, isAuth]);

  if (!isAuth) {
    return (
      <div className={s.layout}>
        <Outlet />
      </div>
    );
  }

  return <>Loading</>;
};

export default MainLayout;
