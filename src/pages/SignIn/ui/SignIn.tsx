import { ChangeEvent, FC, useState } from "react";
import s from "./SignIn.module.scss";
import { PageTitle } from "@/entitites/PageTitle";
import { Button } from "@/shared/ui/Button";
import { useLoginMutation } from "@/store";

const SignIn: FC = () => {
  const [login] = useLoginMutation();
  const [name, setName] = useState("");

  const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const submitHandler = () => {
    login(name);
  };

  return (
    <div className={s.wrapper}>
      <PageTitle standalone>Sign in</PageTitle>
      <div className={s.form}>
        <input type='text' value={name} onChange={changeNameHandler} />
      </div>
      <Button
        variant={name ? "primary" : "default"}
        disabled={!name}
        onClick={submitHandler}
      >
        Submit
      </Button>
    </div>
  );
};

export default SignIn;
