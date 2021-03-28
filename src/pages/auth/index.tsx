import * as React from "react";

import { MainTemplate } from "ui/templates";
import { AuthForm } from "ui/molecules";

import { handleChangeField, submitForm } from "./model";

export const AuthPage = () => {
  return (
    <MainTemplate>
      <div>Sign in to your profile</div>
      <AuthForm
        handleChangeEmail={handleChangeField}
        handleChangePassword={handleChangeField}
        submit={submitForm}
      />
    </MainTemplate>
  );
};
