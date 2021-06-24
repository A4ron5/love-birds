import { forward } from "effector";

import { historyPush } from "features/common/routing";

import { logotypeClicked, burgerClicked, $isBurgerOpen } from "./header.model";

$isBurgerOpen.on(burgerClicked, (open, _) => !open);

forward({
  from: logotypeClicked,
  to: historyPush.prepend(() => "/")
});
