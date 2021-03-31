import { sample } from "effector";
import firebase from "firebase/app";

import { historyPush } from "features/common/routing";

import { clickUserIcon, $user, UserGate } from "./user.model";

sample({
  source: $user,
  clock: clickUserIcon,
  fn: (user) => {
    if (user?.email) return "/profile";

    return "/auth";
  },
  target: historyPush
});

// TODO: Ne UserGate, a ApplicationGate
sample({
  source: UserGate.open,
  fn: (source) => {
    console.log(
      firebase.auth().onAuthStateChanged((user) => console.log(user?.email)),
      "currentuser"
    );
  }
});
