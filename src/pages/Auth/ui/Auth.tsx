import { FC } from "react";
import s from "./Auth.module.scss";
import { Button } from "@/shared/ui/Button";

const AuthPage: FC = () => {
  return (
    <div className={s.wrapper}>
      <Button
        href='/signin'
        className={s.button}
        size='large'
        variant='primary'
        centered
      >
        Sign in
      </Button>
      <Button
        href='/signup'
        className={s.button}
        size='large'
        variant='primary'
        centered
      >
        Sign up
      </Button>
    </div>
  );
};

export default AuthPage;
