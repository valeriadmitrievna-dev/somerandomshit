import { FC, useState } from "react";
import s from "./SignIn.module.scss";
import { PageTitle } from "@/entitites/PageTitle";
import { Button } from "@/shared/ui/Button";
import { useLoginMutation } from "@/store";
import { TextField } from "@/shared/ui/TextField";

const SignIn: FC = () => {
  const [login, { error }] = useLoginMutation();
  const [name, setName] = useState("");

  const changeNameHandler = (value: string) => {
    setName(value);
  };

  const submitHandler = () => {
    login(name);
  };

  return (
    <div className={s.wrapper}>
      <PageTitle standalone>Sign in</PageTitle>
      <div className={s.form}>
        <TextField
          value={name}
          onChange={changeNameHandler}
          label='User name'
          placeholder='Type here...'
          error={error as string}
          disabled
        />
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
