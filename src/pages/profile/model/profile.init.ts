import { guard } from "effector";

import { historyPush } from "features/common/routing";
import { $user } from "features/user/model";

import { ProfilePageGate } from "./profile.model";

guard({
  source: $user,
  clock: ProfilePageGate.open,
  filter: (user) => !user?.email,
  target: historyPush.prepend(() => "/auth")
});
