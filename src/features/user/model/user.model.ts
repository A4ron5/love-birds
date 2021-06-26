import { User } from "firebase/auth";
import { createGate } from "effector-react";

import { root } from "lib/effector-root";

export const clickUserIcon = root.createEvent<void>();

export const fxOnAuthStateChanged = root.createEffect<undefined, User | null>();

export const $user = root.createStore<User | null>(null);
export const $loading = root.createStore<boolean>(false);

export const UserGate = createGate();
