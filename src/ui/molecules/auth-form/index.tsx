import * as React from "react";
import { Event } from "effector";
import styled from "styled-components";

import { Field, Button } from "ui/atoms";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    width: 100%;
    margin-bottom: 15px;

    span {
      margin-bottom: 3px;
    }
  }

  input {
    height: 30px;
  }

  label:last-of-type {
    margin-bottom: 25px;
  }
`;

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
