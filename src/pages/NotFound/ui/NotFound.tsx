import { FC } from "react";
import s from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={s.page}>
      <h1>Error 404 Page</h1>
      <p>
        The page you are looking for cannot be found. It might have been
        removed, renamed, or is temporarily unavailable.
      </p>
      <Button variant='primary' onClick={goBackHandler}>
        Go back
      </Button>
    </div>
  );
};

export default NotFoundPage;
