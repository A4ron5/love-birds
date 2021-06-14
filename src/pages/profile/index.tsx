import * as React from "react";
import { useStore } from "effector-react";

import { MainTemplate } from "ui/templates";
import { Loader } from "ui/atoms";
import { $user, $loading } from "features/user/model";

import { ProfilePageGate } from "./model";
import { Info } from "./ui/info";

const Profile = () => {
  const user = useStore($user);
  const loading = useStore($loading);

  if (loading) return <Loader />;

  return (
    <>
      <ProfilePageGate />
      <Info user={user} />
    </>
  );
};

export const ProfilePage = () => (
  <MainTemplate>
    <Profile />
  </MainTemplate>
);
