import { forward } from "effector";

import { historyPush } from "features/common/routing";

import { triggerBurger, clickLogotype, $isBurgerOpen } from "./header.model";

$isBurgerOpen.on(triggerBurger, (open, _) => !open);

forward({
  from: clickLogotype,
  to: historyPush.prepend(() => "/")
});
