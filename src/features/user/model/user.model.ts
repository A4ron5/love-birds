import firebase from "firebase";
import { createGate } from "effector-react";

import { root } from "lib/effector-root";

export const clickUserIcon = root.createEvent<void>();

export const fxOnAuthStateChanged = root.createEffect<
  undefined,
  firebase.User | null
>();

export const $user = root.createStore<firebase.User | null>(null);

export const UserGate = createGate();
