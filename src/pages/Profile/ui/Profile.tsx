import { FC } from "react";
import s from "./Profile.module.scss";
import { PageTitle } from "@/entitites/PageTitle";

const ProfilePage: FC = () => {
  return (
    <div className={s.page}>
      <PageTitle>Profile</PageTitle>
    </div>
  );
};

export default ProfilePage;
