import * as React from "react";
import styled from "styled-components";

import { Field, Button } from "ui/atoms";

const Form = styled.form``;

export const AuthForm = ({
  sumbit,
  handleChangePassword,
  handleChangeEmail
}) => {
  return (
    <Form onSubmit={submit}>
      <Field
        id="email"
        label="email"
        type="email"
        handleChange={handleChangeEmail}
      />
      <Field
        id="password"
        label="password"
        type="password"
        handleChange={handleChangePassword}
      />
      <Button type="submit">Sign in</Button>
    </Form>
  );
};
