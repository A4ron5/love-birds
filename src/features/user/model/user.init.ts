import { guard, sample } from "effector";

import { $pathname, historyPush } from "features/common/routing";
import { AppGate } from "features/common/mounting";
import { authFx, AuthPageGate } from "pages/auth/model/auth.model";
import { fxLogout } from "pages/profile/model/profile.model";

import { getCurrentUser } from "../lib/getCurrentUser";

import {
  clickUserIcon,
  fxOnAuthStateChanged,
  $user,
  $loading
} from "./user.model";

fxOnAuthStateChanged.use(getCurrentUser);

$user
  .on(authFx.done, (state, { result }) => result)
  .on(fxOnAuthStateChanged.doneData, (_, user) => user)
  .reset(fxLogout.done);

$loading
  .on(fxOnAuthStateChanged.pending, (_, pending) => pending)
  .on(authFx.pending, (_, pending) => pending);

sample({
  source: $user,
  clock: clickUserIcon,
  fn: (user) => {
    if (user?.email) return "/profile";

    return "/auth";
  },
  target: historyPush
});

sample({
  source: AppGate.open,
  target: fxOnAuthStateChanged
});

guard({
  source: [$user, $pathname],
  clock: [AuthPageGate.open, $user],
  filter: ([user, pathname]) => Boolean(user?.email) && pathname === "/auth",
  target: historyPush.prepend(() => "/profile")
});
