import * as React from "react";

import { MainTemplate } from "ui/templates";
import { AuthForm } from "ui/molecules";

import { handleChangeField, submit, AuthPageGate } from "./model";
import { Title } from "./ui";

export const AuthPage = () => {
  return (
    <MainTemplate>
      <AuthPageGate />
      <Title>Sign in to your profile</Title>
      <AuthForm
        handleChangeEmail={handleChangeField}
        handleChangePassword={handleChangeField}
        submit={submit}
      />
    </MainTemplate>
  );
};
