import * as React from "react";
import { useStore } from "effector-react";

import { MainTemplate } from "ui/templates";
import { Loader, Button } from "ui/atoms";
import { $user, $loading } from "features/user/model";

import { ProfilePageGate, logout } from "./model";
import { Info } from "./ui/info";
import { Container } from "./ui/container";

const Profile = () => {
  const user = useStore($user);
  const loading = useStore($loading);

  if (loading) return <Loader />;

  return (
    <Container>
      <ProfilePageGate />
      <Info user={user} />
      <Button onClick={() => logout()}>Logout</Button>
    </Container>
  );
};

export const ProfilePage = () => (
  <MainTemplate>
    <Profile />
  </MainTemplate>
);
