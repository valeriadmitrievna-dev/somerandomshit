import { NavBar } from "@/features/NavBar";
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import s from "./MainLayout.module.scss";
import { ScrollArea } from "@/shared/ui/ScrollArea";
import { useDispatch, useSelector } from "react-redux";
import {
  homespaceIdSelector,
  isAuthSelector,
  login,
  logout,
  userIdSelector,
} from "@/store/auth";
import { useGetUserByIdQuery } from "@/store";

const MainLayout: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector);
  const userId = useSelector(userIdSelector);
  const homespaceId = useSelector(homespaceIdSelector);

  const { data: user, error } = useGetUserByIdQuery(userId!, { skip: !userId });

  useEffect(() => {
    if (!isAuth) {
      navigate("/", { replace: true });
    }
  }, [navigate, isAuth]);

  useEffect(() => {
    if (isAuth && user && !homespaceId) {
      dispatch(
        login({
          homespaceId: user.homespaceId,
          userId,
        })
      );
    }
  }, [isAuth, user, homespaceId, userId]);

  useEffect(() => {
    if (isAuth && error) {
      dispatch(logout());
    }
  }, [isAuth, error]);

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
