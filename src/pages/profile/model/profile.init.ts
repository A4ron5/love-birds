import { guard, forward } from "effector";

import { historyPush } from "features/common/routing";
import { $user } from "features/user/model";

import { logout as logoutHandler } from "../lib/logout";

import { ProfilePageGate, logout, fxLogout } from "./profile.model";

fxLogout.use(logoutHandler);

guard({
  source: $user,
  clock: ProfilePageGate.open,
  filter: (user) => !user?.email,
  target: historyPush.prepend(() => "/auth")
});

forward({
  from: logout,
  to: fxLogout
});

forward({
  from: fxLogout.done,
  to: historyPush.prepend(() => "/auth")
});
