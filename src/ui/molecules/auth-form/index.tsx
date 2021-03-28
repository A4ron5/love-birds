import * as React from "react";
import { Event } from "effector";
import styled from "styled-components";

import { Field, Button } from "ui/atoms";

const Form = styled.form``;

type AuthFormProps = {
  submit: () => void;
  handleChangePassword: Event<React.ChangeEvent<HTMLInputElement>>;
  handleChangeEmail: Event<React.ChangeEvent<HTMLInputElement>>;
};

export const AuthForm = ({
  submit,
  handleChangePassword,
  handleChangeEmail
}: AuthFormProps) => {
  return (
    <Form onSubmit={submit}>
      <Field
        name="email"
        label="Email"
        type="email"
        handleChange={handleChangeEmail}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        handleChange={handleChangePassword}
      />
      <Button type="submit">Sign in</Button>
    </Form>
  );
};
