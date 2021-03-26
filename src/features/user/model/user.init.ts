import { forward } from "effector";

import { historyPush } from "features/common/routing";

import { clickUserIcon } from "./user.model";

forward({
  from: clickUserIcon,
  to: historyPush.prepend(() => {
    return "/auth";
  })
});
