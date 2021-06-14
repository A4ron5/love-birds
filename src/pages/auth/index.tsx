import * as React from "react";
import { useStore } from "effector-react";

import { MainTemplate } from "ui/templates";
import { AuthForm } from "ui/molecules";
import { Loader } from "ui/atoms";

import { $loading } from "features/user/model";

import { handleChangeField, submit, AuthPageGate } from "./model";
import { Title } from "./ui";

const Auth = () => {
  const loading = useStore($loading);

  if (loading) return <Loader />;

  return (
    <>
      <AuthPageGate />
      <Title>Sign in to your profile</Title>
      <AuthForm
        handleChangeEmail={handleChangeField}
        handleChangePassword={handleChangeField}
        submit={submit}
      />
    </>
  );
};

export const AuthPage = () => (
  <MainTemplate>
    <Auth />
  </MainTemplate>
);
