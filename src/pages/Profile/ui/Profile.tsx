import { FC } from "react";
import s from "./Profile.module.scss";
import { PageTitle } from "@/entitites/PageTitle";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";
import { Button } from "@/shared/ui/Button";

const ProfilePage: FC = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={s.page}>
      <PageTitle>Profile</PageTitle>
      <Button variant='error' onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
