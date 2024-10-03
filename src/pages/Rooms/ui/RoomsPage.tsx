import { FC } from "react";
import s from "./RoomsPage.module.scss";
import { PageTitle } from "@/entitites/PageTitle";

const RoomsPage: FC = () => {
  return (
    <div className={s.page}>
      <PageTitle>Rooms</PageTitle>
    </div>
  );
};

export default RoomsPage;
