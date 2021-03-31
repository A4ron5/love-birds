import * as React from "react";

import { MainTemplate } from "ui/templates";

import { ProfilePageGate } from "./model";

export const ProfilePage = () => {
  return (
    <MainTemplate>
      <ProfilePageGate />
      <div>ProfilePage</div>
    </MainTemplate>
  );
};
